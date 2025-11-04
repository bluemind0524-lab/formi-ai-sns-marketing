# 포미서비스 - AI SNS 마케팅 랜딩 페이지

AI 기반 SNS 마케팅 서비스를 소개하는 정적 웹사이트입니다.

## 🚀 시작하기

### 로컬에서 실행

1. `index.html` 파일을 브라우저에서 직접 열기:
   - 파일 탐색기에서 `index.html` 파일을 찾아 더블클릭
   - 또는 브라우저 주소창에 파일 경로 입력: `file:///C:/Users/white/01_VC_BASICWEB/index.html`

2. 로컬 서버로 실행 (권장):
   ```bash
   # Python 3가 설치되어 있는 경우
   python -m http.server 8000
   
   # Node.js가 설치되어 있는 경우
   npx serve
   ```
   그 후 브라우저에서 `http://localhost:8000` 접속

### 배포

#### GitHub Pages로 배포
1. GitHub 저장소 생성
2. 코드 푸시
3. Settings > Pages에서 배포 설정
4. `main` 브랜치 선택 후 저장

#### 기타 호스팅 서비스
- Netlify: 폴더 드래그 앤 드롭으로 간편 배포
- Vercel: Git 연동으로 자동 배포
- Cloudflare Pages: 빠른 글로벌 배포

## 📁 파일 구조

```
01_VC_BASICWEB/
├── index.html      # 메인 HTML 파일
├── styles.css      # 커스텀 스타일시트
├── script.js       # JavaScript 기능
└── README.md       # 프로젝트 설명서
```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary Dark** (#1243A6): 진한 파랑 - 주요 버튼, 헤더
- **Primary** (#1D64F2): 밝은 파랑 - 링크, 하이라이트
- **Dark** (#011C40): 네이비 - 텍스트, 배경
- **Light** (#F2EED8): 크림 - 배경, 카드
- **Accent** (#F24822): 오렌지레드 - CTA, 강조

### 폰트
- 제목: Noto Sans KR Bold
- 본문: Noto Sans KR Regular

## 📱 페이지 섹션

1. **Hero Section**: AI SNS 마케팅 소개 및 메인 CTA
2. **Service Introduction**: 3가지 핵심 장점
3. **Features Section**: AI 기능 4가지
4. **Pricing Section**: 가격 비교
5. **Process Section**: 4단계 프로세스
6. **Testimonials Section**: 고객 후기
7. **CTA Section**: 상담 신청 폼
8. **Footer**: 회사 정보 및 링크

## ✨ 주요 기능

### 🎭 애니메이션
- Fade-in 효과로 부드러운 페이지 로드
- Scroll 애니메이션 (Intersection Observer 활용)
- Hover 효과 및 마이크로 인터랙션
- 부드러운 스크롤

### 📋 폼 기능
- 실시간 유효성 검사
- 자동 전화번호 포맷팅 (010-1234-5678)
- 이메일 형식 검증
- 오류 메시지 표시
- 성공 메시지 표시

### 📱 반응형 디자인
- Mobile-first 접근 방식
- 태블릿, 데스크톱 최적화
- Tailwind CSS 그리드 시스템 활용

### ♿ 접근성
- 키보드 네비게이션 지원
- Focus 스타일 적용
- ARIA 속성 고려
- 화면 리더 호환

### 🎯 기타 기능
- Scroll to Top 버튼
- 부드러운 앵커 링크 스크롤
- 커스텀 스크롤바
- 성능 최적화 (lazy loading 준비)

## 🧪 테스트하기

### 브라우저 호환성 확인
- Chrome, Firefox, Safari, Edge 최신 버전에서 테스트
- 모바일 디바이스에서 반응형 확인

### 테스트 체크리스트
- [ ] 모든 섹션이 올바르게 표시되는지 확인
- [ ] 네비게이션 링크가 부드럽게 스크롤되는지 확인
- [ ] 폼 유효성 검사가 작동하는지 확인
  - 이름이 2글자 미만일 때 오류
  - 전화번호 형식이 잘못되었을 때 오류
  - 이메일 형식이 잘못되었을 때 오류
- [ ] 반응형 디자인이 다양한 화면 크기에서 작동하는지 확인
- [ ] 애니메이션이 부드럽게 작동하는지 확인
- [ ] Scroll to Top 버튼이 작동하는지 확인
- [ ] 모든 호버 효과가 작동하는지 확인

### 개발자 도구로 확인
1. F12를 눌러 개발자 도구 열기
2. Console 탭에서 오류 확인
3. Network 탭에서 리소스 로딩 확인
4. Lighthouse로 성능 분석

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 커스텀 스타일 + 애니메이션
- **Tailwind CSS**: 유틸리티 기반 스타일링 (CDN)
- **Vanilla JavaScript**: ES6+ 문법
- **Intersection Observer API**: 스크롤 애니메이션
- **Google Fonts**: Noto Sans KR

## 📝 커스터마이징

### 연락처 정보 수정
`index.html` 파일에서 다음 정보를 수정하세요:
- 전화번호: `1588-0000`
- 이메일: `contact@formi.co.kr`
- 카카오톡: `@포미서비스`

### 색상 변경
`styles.css` 파일의 `:root` 섹션에서 CSS 변수 수정:
```css
:root {
    --primary-dark: #1243A6;
    --primary: #1D64F2;
    --dark: #011C40;
    --light: #F2EED8;
    --accent: #F24822;
}
```

### 폼 제출 처리
`script.js` 파일의 폼 제출 핸들러를 수정하여 실제 백엔드 API에 연결:
```javascript
// 현재는 시뮬레이션
// 실제 환경에서는 fetch API로 백엔드에 전송
const response = await fetch('https://your-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

## 📊 성능 최적화

- Tailwind CSS CDN 사용 (프로덕션에서는 빌드 버전 권장)
- 이미지 lazy loading 준비 완료
- 애니메이션 최적화 (GPU 가속)
- 스크롤 이벤트 디바운싱
- Reduced motion 미디어 쿼리 지원

## 🔒 보안 고려사항

- 폼 데이터 유효성 검사
- XSS 방지를 위한 적절한 인코딩
- HTTPS 사용 권장 (배포 시)

## 📄 라이선스

이 프로젝트는 포미서비스를 위해 제작되었습니다.

## 💬 문의

- 이메일: contact@formi.co.kr
- 전화: 1588-0000

---

© 2025 포미서비스. All rights reserved.

