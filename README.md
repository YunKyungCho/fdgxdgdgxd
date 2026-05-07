# Toss Checklist Web App

토스 스타일의 아름다운 체크리스트 웹앱입니다.

## 기술 스택

- **Frontend**: React + Vite, TypeScript, Tailwind CSS, Lucide React, Axios
- **Backend**: Node.js + Express, REST API, CORS, 메모리 저장

## 기능

- 할 일 추가 (Enter 또는 버튼 클릭)
- 할 일 목록 조회 (최신 항목 우선)
- 완료/미완료 토글
- 할 일 삭제
- 빈 상태 표시
- 로딩 및 에러 처리
- 모바일 친화적 UI

## 실행 방법

### Backend 실행

```bash
cd backend
npm install
node src/server.js
```

서버가 http://localhost:3000에서 실행됩니다.

### Frontend 실행

```bash
cd frontend
npm install
npm run dev
```

프론트엔드가 http://localhost:5173에서 실행됩니다.

### 동시에 실행

두 터미널을 열어 각각 실행하세요.

## API 명세

- `GET /todos` - 전체 할 일 조회
- `POST /todos` - 할 일 추가 (body: { text: string })
- `PATCH /todos/:id` - 완료 상태 토글
- `DELETE /todos/:id` - 할 일 삭제

## 디자인 특징

- 토스 스타일: 미니멀, 부드러운 그림자, 라운드 카드, 넉넉한 여백
- 부드러운 애니메이션 (hover, transition 200-300ms)
- 모바일 우선 반응형 디자인
- 최대 너비 480px, 화면 중앙 정렬