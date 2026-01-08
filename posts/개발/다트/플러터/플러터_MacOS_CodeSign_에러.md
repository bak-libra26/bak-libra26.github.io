---
summary: 플러터 M1 Mac에 "CodeSign Fail" 빌드 실패
tags: 
references: 
created_date: 2026-01-08T23:09:52.000Z
last_modified_date: 2026-01-08T23:09:52.000Z
---

> 이 글은 M1 Mac 환경에서 Flutter macOS 앱 빌드 중 CodeSign Failed 오류가 발생할 때의 원인 분석과 해결 방법을 정리한 것입니다.

## 문제 현상

macOS 환경에서 Flutter 프로젝트를 빌드할 때 다음과 같은 오류가 발생했습니다:

```shell
$ flutter run -d macos
Launching lib/main.dart on macOS in debug mode...
/Users/${username}/Documents/.../${project_name}.app: resource fork, Finder information, or similar detritus not allowed
Command CodeSign failed with a nonzero exit code
** BUILD FAILED **

Building macOS application...
Error: Build process failed
```

반면, `flutter run -d chrome` 명령에서는 정상적으로 실행되었습니다.

## 원인 분석

이 오류는 **CodeSign 과정에서 macOS의 확장 속성(extended attributes)**이 포함되어 코드 서명이 거부되는 문제로,
macOS에서 **iCloud Drive 동기화가 활성화된 폴더**(`~/Documents`, `~/Desktop` 등)에 프로젝트가 위치한 경우 발생하는 것으로 보입니다.

1. **iCloud 동기화 과정**에서 파일에 `com.apple.ResourceFork`, `com.apple.metadata:_kMDItemUserTags` 등의 확장 속성이 자동 추가됨
2. **Flutter 빌드** 중 생성되는 바이너리(.app 파일)에도 해당 속성이 복사됨
3. **CodeSign**이 보안상의 이유로 이러한 메타데이터를 포함한 파일의 서명을 거부

즉, **iCloud 동기화 폴더** 자체가 파일에 불필요한 메타데이터를 자동으로 부여하기 때문에 발생하는 문제입니다.

결론적으로, 프로젝트가 iCloud 동기화 폴더 안에 있을 때 발생하는 문제입니다.

## 해결 방법

제 기준, 해당 프로젝트를 iCloud 동기화할 필요가 없었기 때문에 동기화되지 않는 경로에 프로젝트를 두는 방식으로 문제를 해결하였습니다.

```shell
# 예시: 별도 개발용 폴더 생성 후 이동
mkdir -p ~/dev
cd ~/dev

# 프로젝트 생성
flutter create my_app

# macOS 빌드 실행
cd my_app
flutter run -d macos
```

- 주의: 피해야 할 폴더
    1. `~/Documents` → 동기화 대상
    2. `~/Desktop` → 동기화 대상
    3. `~/Downloads` → 환경에 따라 동기화 가능 대상

위 경로들은 iCloud와 자동으로 동기화되는 경우가 많으므로, 개발 프로젝트를 두지 않는 것이 좋을 것 같고, Finder에서 파일 옆에 ☁️ 구름 아이콘이 보이면 iCloud 동기화 중이니 주의해야할 것 같습니다.
