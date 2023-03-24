const axios = require('axios');
const fs = require('fs');
const path = require('path');

const filePaths = {
  emojiMarkdown: path.resolve(process.cwd(), 'docs', 'emoji.md'),
  emojiJS: path.resolve(
    process.cwd(),
    'src',
    'core',
    'render',
    'emoji-data.js'
  ),
};

async function getEmojiData() {
  const emojiDataURL = 'https://api.github.com/emojis';

  console.info(`- 从 ${emojiDataURL} 获取 Emoji 数据`);

  const response = await axios.get(emojiDataURL);
  const baseURL = Object.values(response.data)
    .find(url => /unicode\//)
    .split('unicode/')[0];
  const data = { ...response.data };

  // Remove base URL from emoji URLs
  Object.entries(data).forEach(
    ([key, value]) => (data[key] = value.replace(baseURL, ''))
  );

  console.info(`- 检索到 ${Object.keys(data).length} 条 Emoji 数据`);

  return {
    baseURL,
    data,
  };
}

function writeEmojiPage(emojiData) {
  const isExistingPage = fs.existsSync(filePaths.emojiMarkdown);
  const emojiPage =
    (isExistingPage && fs.readFileSync(filePaths.emojiMarkdown, 'utf8')) ||
    `<!-- START -->\n\n<!-- END -->`;
  const emojiRegEx = /(<!--\s*开始.*-->\n)([\s\S]*)(\n<!--\s*结束.*-->)/;
  const emojiMatch = emojiPage.match(emojiRegEx);
  const emojiMarkdownStart = emojiMatch[1].trim();
  const emojiMarkdown = emojiMatch[2].trim();
  const emojiMarkdownEnd = emojiMatch[3].trim();
  const newEmojiMarkdown = Object.keys(emojiData.data)
    .reduce(
      (preVal, curVal) =>
        (preVal += `:${curVal}: ` + '`' + `:${curVal}:` + '`' + '\n\n'),
      ''
    )
    .trim();

  if (emojiMarkdown !== newEmojiMarkdown) {
    const newEmojiPage = emojiPage.replace(
      emojiMatch[0],
      `${emojiMarkdownStart}\n\n${newEmojiMarkdown}\n\n${emojiMarkdownEnd}`
    );

    fs.writeFileSync(filePaths.emojiMarkdown, newEmojiPage);

    console.info(
      `- ${!isExistingPage ? 'Created' : 'Updated'}: ${filePaths.emojiMarkdown}`
    );
  } else {
    console.info(`- 没有变化: ${filePaths.emojiMarkdown}`);
  }
}

function writeEmojiJS(emojiData) {
  const isExistingPage = fs.existsSync(filePaths.emojiJS);
  const emojiJS = isExistingPage && fs.readFileSync(filePaths.emojiJS, 'utf8');
  const newEmojiJS = [
    '/* eslint 禁用 */\n',
    '// =============================================================================',
    '// 请勿编辑：此文件由 /build/emoji.js 自动生成',
    '// =============================================================================\n',
    `export default ${JSON.stringify(emojiData, {}, 2)}`,
  ].join('\n');

  if (!emojiJS || emojiJS !== newEmojiJS) {
    fs.writeFileSync(filePaths.emojiJS, newEmojiJS);

    console.info(
      `- ${!isExistingPage ? 'Created' : 'Updated'}: ${filePaths.emojiJS}`
    );
  } else {
    console.info(`- 没有变化: ${filePaths.emojiJS}`);
  }
}

(async () => {
  console.info('构建 emoji');

  try {
    const emojiData = await getEmojiData();

    if (emojiData) {
      writeEmojiPage(emojiData);
      writeEmojiJS(emojiData);
    }
  } catch (err) {
    console.warn(`- 错误: ${err.message}`);
  }
})();
