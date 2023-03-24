const browserSync = require('browser-sync').create();
const path = require('path');

const hasStartArg = process.argv.includes('--start');
const serverConfig = {
  hostname: '127.0.0.1',
  port: hasStartArg ? 3002 : 3001,
};

function startServer(options = {}, cb = Function.prototype) {
  const defaults = {
    ...serverConfig,
    middleware: [
      {
        route: '/_blank.html',
        handle: function (req, res, next) {
          res.setHeader('Content-Type', 'text/html');
          res.end('');
          next();
        },
      },
    ],
    notify: false,
    open: false,
    rewriteRules: [
      // 将 docsify 相关的 CDN URL 替换为本地路径
      {
        match:
          /(https?:)?\/\/cdn\.jsdelivr\.net\/npm\/docsify(@\d?\.?\d?\.?\d)?\/lib\//g,
        replace: '/lib/',
      },
    ],
    server: {
      baseDir: path.resolve(__dirname, '../'),
      routes: {
        '/docs': path.resolve(__dirname, '../../docs'),
        '/docs/changelog.md': './CHANGELOG.md',
        '/lib': path.resolve(__dirname, '../../lib'),
        '/node_modules': path.resolve(__dirname, '../../node_modules'),
      },
    },
    snippetOptions: {
      rule: {
        match: /<\/body>/i,
        fn: function (snippet, match) {
          // 覆盖变更日志别名以加载本地变更日志（参见路由）
          return `
            ${snippet.replace(/<script[^>]*/, '$& type="text/plain"')}
            <script>
              (function() {
                var aliasConfig = (window && window.$docsify && window.$docsify.alias) || {};
                var isIE = /*@cc_on!@*/!!document.documentMode;

                // 在测试期间修复文档站点配置
                aliasConfig['.*?/changelog'] = '/changelog.md';

                // 为非 IE 浏览器启用 BrowserSync 片段
                if (!isIE) {
                  document.querySelector('#__bs_script__').removeAttribute('type');
                }
              })();
            </script>
            ${match}
          `;
        },
      },
    },
    ui: false,
  };

  console.log('\n');

  // 设置 TEST_HOST 环境变量
  process.env.TEST_HOST = `http://${serverConfig.hostname}:${serverConfig.port}`;

  // 启动服务器
  browserSync.init(
    // Config
    {
      ...defaults,
      ...options,
    },
    // Callback
    cb
  );
}

async function startServerAsync() {
  await new Promise((resolve, reject) => {
    startServer({}, () => {
      console.log('\n');
      resolve();
    });
  });
}

function stopServer() {
  browserSync.exit();
}

// 像固定装置 (index.html)) 和用于测试的本地文档站点 (docs)。
if (hasStartArg) {
  startServer({
    open: true,
    port: serverConfig.port,
    directory: true,
    startPath: '/docs',
  });
}
// 显示有关手动启动服务器实例的友好消息
else if (require.main === module) {
  console.info('Use --start argument to manually start server instance');
}

module.exports = {
  start: startServer,
  startAsync: startServerAsync,
  stop: stopServer,
  TEST_HOST: `http://${serverConfig.hostname}:${serverConfig.port}`,
};
