# OSS Week 12 — React Hooks Playground (Student Starter)

## 학습 목표
- LAB 1 (Slide 07): `useEffect`와 의존성 배열로 1초 Timer 구현
- LAB 2 (Slide 10): `running` 상태와 Effect Cleanup으로 Start / Stop / Reset 구현
- LAB 3 (Slide 15): `useRef`로 DOM Input Focus / Clear 구현
- LAB 4 (Slide 17): `useRef`로 Timer ID 저장, 중복 실행 방지 및 Cleanup 구현

## 실행 방법
Node.js 20.19+ 또는 22.12+ 권장. 프로젝트 폴더에서 실행:

```bash
npm install
npm run dev
```

브라우저에 터미널의 Local URL을 열고 LAB 탭을 이동하세요. 제출 전 `npm run build`도 실행하세요.

## 수행 방법
1. `src/components/` 아래의 LAB 1~4 파일에 있는 `TODO`를 직접 완성합니다.
2. `src/App.jsx`, `src/App.css`는 공통 화면이므로 가급적 수정하지 않습니다.
3. 각 LAB의 동작 화면과 콘솔 결과를 기록합니다.
4. 한 LAB에서 다른 LAB으로 탭을 전환하면 기존 컴포넌트가 언마운트됩니다. Cleanup 결과를 관찰합니다.

## 점검표
- [ ] LAB 1: 1초마다 count 증가, 탭 전환 시 interval 정리
- [ ] LAB 1: Dependency Array `[]`와 생략 시 차이 관찰 후 원상 복구
- [ ] LAB 2: Start / Stop / Reset 정확히 동작하고 interval 중복 없음
- [ ] LAB 3: Focus / Clear 정상 동작
- [ ] LAB 4: useRef에 timer ID 보관, Start 중복 방지, Stop / Reset 동작
- [ ] LAB 4: 탭 이동 시 interval 정리
- [ ] npm run build 성공

## 이해도 확인 질문
1. `setCount(prev => prev + 1)`은 왜 유용한가?
2. `useEffect(fn, [])`과 `useEffect(fn)`은 어떻게 다른가?
3. Cleanup은 언제 실행되는가? 개발 환경 StrictMode 영향은?
4. `useState`와 `useRef`의 값 변경 시 렌더링 차이는?
5. LAB 2와 LAB 4에서 Timer를 관리하는 방식의 차이는?

## 제출 예시
GitHub Repository URL, LAB 1~4 완성 코드, 실행 캡처, 위 질문에 대한 간단한 답변.

> React StrictMode 개발 환경에서 Effect setup/cleanup이 추가 실행될 수 있습니다. 학습 중에는 Console을 관찰해 이유를 설명해 보세요.
