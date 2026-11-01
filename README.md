# ABC 기차 (PWA)

아이패드 홈 화면에서 주소창 없이 앱처럼 열리는 알파벳 게임이에요.

## 처음 올리기 (GitHub Pages)

1. github.com에서 **New repository**를 누르고 이름을 `abc-train`으로 정해요. 무료 계정은 **Public**이어야 Pages를 쓸 수 있어요.
2. 저장소 화면의 **uploading an existing file**을 눌러 이 폴더 안의 파일 전체(`index.html`, `manifest.webmanifest`, `sw.js`, `icons` 폴더)를 끌어다 놓고 **Commit changes**를 눌러요.
3. 저장소 **Settings → Pages**에서 Source를 **Deploy from a branch**, Branch를 **main / (root)**로 고르고 **Save**를 눌러요.
4. 1~2분 뒤 `https://<내 GitHub 아이디>.github.io/abc-train/` 주소로 게임이 열려요.

## 아이패드에 설치

1. Safari에서 위 주소를 열어요.
2. 공유 버튼 → **홈 화면에 추가**를 눌러요.
3. 홈 화면의 ABC 기차 아이콘으로 열면 주소창 없이 전체 화면으로 실행돼요.
4. 한 번 열고 나면 인터넷이 없어도 플레이할 수 있어요.

## 업데이트할 때

1. 새 `index.html`과 `sw.js`를 저장소에 다시 올려요. 같은 이름으로 올리면 덮어써져요.
2. 아이패드에서 앱을 완전히 닫았다가 두 번 열면 새 버전이 적용돼요.

`sw.js` 맨 위 `VERSION` 값이 바뀌어야 아이패드가 새 파일을 받아요. 업데이트 파일을 받을 때는 이 값이 이미 바뀌어 있어요.
