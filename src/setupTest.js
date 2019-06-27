// react-testing-library 将你的组件渲染给 document.body ，
// 这将确保在每次测试后将其删除。
import 'react-testing-library/cleanup-after-each';
// 这会添加 jest-dom 的自定义断言
import 'jest-dom/extend-expect';