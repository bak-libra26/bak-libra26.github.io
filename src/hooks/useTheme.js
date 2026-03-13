/**
 * @file useTheme 커스텀 훅
 * @description ThemeContext에서 현재 테마 상태와 테마 전환 함수를 가져오는 편의 훅.
 *              컴포넌트에서 useContext(ThemeContext) 대신 useTheme()으로 간결하게 사용할 수 있다.
 */

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

/**
 * 테마 컨텍스트에 접근하는 커스텀 훅
 * @returns {object} ThemeContext가 제공하는 테마 상태 및 토글 함수
 */
const useTheme = () => useContext(ThemeContext);

export default useTheme;
