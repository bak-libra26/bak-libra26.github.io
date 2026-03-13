/**
 * @file commands/index.js - 터미널 명령어 레지스트리
 *
 * 모든 내장 명령어를 하나의 Map에 등록한다.
 * 키: 명령어 이름, 값: 실행 함수 (ctx, args) => void
 *
 * 명령어 카테고리:
 *   - 탐색: ls, cd, pwd, tree
 *   - 파일: cat, vi/vim, open, wget
 *   - 검색: grep, find, wc
 *   - 시스템: help, history, whoami, clear, exit, neofetch
 *   - 재미: fortune, cowsay, sl
 *
 * @exports COMMANDS (Map)
 */

import { execLs, execCd, execPwd, execTree } from './navigation.js';
import { execCat, execVi, execOpen, execWget } from './file-ops.js';
import { execGrep, execFind, execWc } from './search.js';
import { execHelp, execHistory, execWhoami, execClear, execExit, execNeofetch } from './system.js';
import { execFortune, execCowsay, execSl } from './fun.js';

// 명령어 이름 → 핸들러 함수 매핑
const COMMANDS = new Map([
  ['ls', execLs],
  ['cd', execCd],
  ['pwd', execPwd],
  ['tree', execTree],
  ['cat', execCat],
  ['vi', execVi],
  ['vim', execVi],
  ['open', execOpen],
  ['grep', execGrep],
  ['find', execFind],
  ['wc', execWc],
  ['wget', execWget],
  ['help', execHelp],
  ['history', execHistory],
  ['whoami', execWhoami],
  ['clear', execClear],
  ['exit', execExit],
  ['neofetch', execNeofetch],
  ['fortune', execFortune],
  ['cowsay', execCowsay],
  ['sl', execSl],
]);

export default COMMANDS;
