# エラーがthrowされた時にfinallyブロックを通るか調査


## 結果
- finallyに移ってから、エラーがthrowされる。
```
/*
> try-finally-close-sample@1.0.0 sample
> npx tsx src/index.ts
finally! <- finallyブロック内でconsole.log
node:internal/modules/run_main:129
    triggerUncaughtException(
    ^
page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "hogehogefoo", waiting until "load"
    at specialFetchTitle (/Users/zuoxiangtailang/try-finally-close-sample/src/index.ts:8:16)
    at <anonymous> (/Users/zuoxiangtailang/try-finally-close-sample/src/index.ts:22:1) {
  name: 'Error'
}
Node.js v20.13.1
```