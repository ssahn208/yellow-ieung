# 🌟 Yellow Ieung - GitHub Pages 배포 가이드

## ✅ 최종 확정 사항

**제목:** Yellow Ieung (ㅇ)  
**Repository:** yellow-ieung  
**URL:** https://ssahn208.github.io/yellow-ieung

**Description:**
```
Interactive generative art exploring Korean letter 'ㅇ' (ieung) as glowing yellow stars in cosmic space: from silence to sound to universe. Inspired by Erik Satie's minimalism. Built with p5.js + Web Audio API.
```

**Topics (12개):**
```
p5js, generative-art, web-audio-api, korean-typography, creative-coding, interactive-art, minimalism, erik-satie, sound-art, canvas, glowing-stars, hangul
```

---

## 📦 파일 준비 완료

다음 파일들이 생성되었습니다:

- ✅ `index.html` - 포트폴리오용 메인 페이지
- ✅ `style.css` - 반응형 스타일 + UI
- ✅ `sketch.js` - p5.js 메인 코드
- ✅ `README.md` - 작품 설명
- ✅ `.gitignore` - Git 제외 파일 목록

---

## 🚀 배포 단계

### **Step 1: GitHub Repository 생성**

1. https://github.com 접속 및 로그인
2. 우측 상단 `+` → `New repository` 클릭
3. 다음 정보 입력:

```
Repository name: yellow-ieung
Description: Interactive generative art exploring Korean letter 'ㅇ' (ieung) as glowing yellow stars
```

4. 설정:
   - ✅ **Public** 선택
   - ❌ "Add a README file" 체크 해제
   - ❌ "Add .gitignore" 체크 해제
   - ❌ "Choose a license" 선택 안 함

5. **Create repository** 클릭

---

### **Step 2: 로컬 프로젝트 설정**

PowerShell 열고 다음 명령어 실행:

```powershell
# 프로젝트 폴더 생성
cd "O:\2026 data\9 coding 2026"
mkdir yellow-ieung
cd yellow-ieung
```

---

### **Step 3: 파일 복사**

다운로드한 파일들을 `O:\2026 data\9 coding 2026\yellow-ieung` 폴더에 복사:

- index.html
- style.css
- sketch.js
- README.md
- .gitignore

---

### **Step 4: Git 초기화 및 업로드**

```powershell
# Git 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "feat: Yellow Ieung (ㅇ) - glowing yellow stars in cosmic space"

# GitHub 원격 저장소 연결
git remote add origin https://github.com/ssahn208/yellow-ieung.git

# 브랜치 이름 설정
git branch -M main

# GitHub에 업로드
git push -u origin main
```

**⚠️ 로그인 창이 나타나면:**
- GitHub 계정으로 로그인
- 또는 Personal Access Token 입력

---

### **Step 5: GitHub Pages 활성화**

1. https://github.com/ssahn208/yellow-ieung 접속
2. **Settings** 탭 클릭
3. 왼쪽 메뉴 → **Pages** 클릭
4. **Source** 설정:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
   - **Save** 클릭

5. 1~2분 후 다음 URL에서 확인:
   ```
   https://ssahn208.github.io/yellow-ieung
   ```

---

### **Step 6: About 섹션 설정**

GitHub 저장소 페이지에서:

1. About 섹션 우측 ⚙️ 클릭
2. 다음 정보 입력:

**Description:**
```
Interactive generative art exploring Korean letter 'ㅇ' (ieung) as glowing yellow stars in cosmic space: from silence to sound to universe. Inspired by Erik Satie's minimalism. Built with p5.js + Web Audio API.
```

**Website:**
```
https://ssahn208.github.io/yellow-ieung
```

**Topics** (하나씩 추가):
```
p5js
generative-art
web-audio-api
korean-typography
creative-coding
interactive-art
minimalism
erik-satie
sound-art
canvas
glowing-stars
hangul
```

3. **Save changes** 클릭

---

## 📸 선택사항: Preview 이미지 추가

### 방법 1: 스크린샷 찍기

1. 작품 실행 (로컬에서 index.html 열기)
2. `F12` → Console 탭
3. 다음 코드 입력:

```javascript
canvas.toBlob(blob => {
  let url = URL.createObjectURL(blob);
  let a = document.createElement('a');
  a.href = url;
  a.download = 'preview.png';
  a.click();
});
```

4. `preview.png` 파일이 다운로드됨

### 방법 2: 스크린샷 도구 사용

1. Windows: `Win + Shift + S`
2. Mac: `Cmd + Shift + 4`
3. `preview.png`로 저장

### 업로드:

```powershell
# preview.png를 프로젝트 폴더에 복사 후
git add preview.png
git commit -m "docs: add preview screenshot"
git push
```

---

## 🔄 코드 수정 후 업데이트 방법

```powershell
# 변경사항 확인
git status

# 모든 변경사항 추가
git add .

# 커밋 (의미있는 메시지)
git commit -m "update: improve audio timing"

# GitHub에 푸시
git push
```

**자동 배포:** 푸시 후 1~2분 이내 자동 반영!

---

## ✅ 배포 완료 체크리스트

최종 확인:

- [ ] Repository 생성됨
- [ ] 파일 5개 업로드 완료
- [ ] GitHub Pages 활성화됨
- [ ] About 섹션 설정 완료 (Description + Topics + Website)
- [ ] 라이브 URL 접속 가능: https://ssahn208.github.io/yellow-ieung
- [ ] 모바일에서도 작동 확인
- [ ] 오디오 작동 확인 (클릭 후)
- [ ] (선택) preview.png 업로드

---

## 🌟 SNS 공유 문구 (준비됨)

### Instagram/Twitter:
```
🌟 Yellow Ieung (ㅇ)

한글 '이응'을 우주의 노란 별로:
🔇 침묵 (mute)
🔊 소리 ('NG')
⭕ 우주 (cosmos)

29개의 노란 별이 에릭 사티의 음악처럼
어둠 속에서 빛나며 노래합니다.

#YellowIeung #GenerativeArt 
#KoreanTypography #p5js #ErikSatie

👉 ssahn208.github.io/yellow-ieung
```

---

## 🐛 문제 해결

### 404 에러
- Settings → Pages에서 Source 확인
- `index.html` 파일이 루트에 있는지 확인
- 5분 정도 기다리기

### CSS/JS가 안 로드됨
- 브라우저 F12 → Console 탭 확인
- 파일 경로 확인 (`./style.css` 또는 `style.css`)

### 오디오가 안 들림
- 브라우저에서 클릭했는지 확인
- 볼륨 확인
- Chrome/Edge 권장 (Safari는 Web Audio API 제한)

---

## 💡 다음 단계

배포 후:

1. **포트폴리오에 추가**: 링크 공유
2. **SNS 공유**: Instagram, Twitter 등
3. **커뮤니티**: p5.js 커뮤니티, OpenProcessing 등에 공유
4. **피드백 수집**: 사용자 반응 확인

---

**모든 준비가 완료되었습니다!** 🎉

질문이 있으면 언제든 물어보세요!
