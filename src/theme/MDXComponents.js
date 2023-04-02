import React from 'react';
// 导入原始映射器
import MDXComponents from '@theme-original/MDXComponents';

// 导入 FontAwesomeIcon 组件。
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// 导入库组件。
import {library} from '@fortawesome/fontawesome-svg-core';

// 导入所有品牌图标。
import {fab} from '@fortawesome/free-brands-svg-icons';

// 导入所有实心图标。
import {fas} from '@fortawesome/free-solid-svg-icons';

// 将所有图标添加到库中，以便无需单独导入即可使用它们。
library.add(fab, fas);

export default {
    // 重用默认映射
    ...MDXComponents,

    // 使 FontAwesomeIcon 组件在 MDX 中作为<icon >提供。
    icon: FontAwesomeIcon,
};
