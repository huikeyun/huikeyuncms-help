/*******************************************************************************
 * Copyright (c) 2023. 慧科云
 * 此源代码根据 MIT 许可证进行许可，该许可证位于此源代码树根目录中的 LICENSE 文件中。
 * 最后修改时间：2023/4/3 下午8:46
 ******************************************************************************/

import React from 'react';
// 导入原始映射器
import MDXComponents from '@theme-original/MDXComponents';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; // 导入 FontAwesomeIcon 组件。
import {library} from '@fortawesome/fontawesome-svg-core'; // 导入库组件。
import {far} from '@fortawesome/free-regular-svg-icons'; // 导入所有空心图标。
import {fab} from '@fortawesome/free-brands-svg-icons'; // 导入所有品牌图标。
import {fas} from '@fortawesome/free-solid-svg-icons'; // 导入所有实心图标。

library.add(far, fab, fas); // 将所有图标添加到库中，以便无需单独导入即可使用它们。

export default {
    // 重用默认映射
    ...MDXComponents,
    icon: FontAwesomeIcon, // 使 FontAwesomeIcon 组件在 MDX 中作为 <icon> 提供。
};
