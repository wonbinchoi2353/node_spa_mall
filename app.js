const express = require("express");
const app = express();
const port = 3000;

const goodsRouter = require("./routes/goods.js");
const cartsRouter = require("./routes/carts.js");
// index.js는 폴더를 불러와도 바로 사용 되서 생략
const connect = require("./schemas");
connect();

// body에 데이터가 들어왔을 때 사용할 수 있게 해주는 미들웨어
app.use(express.json()); // body parser

// body 파서 미들웨어 사용하기 위함
app.use("/api", [goodsRouter, cartsRouter]); // /api 주소로 라우터로 전달

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});

// app.post("/", (req, res) => {
//     console.log(req.body);

//     res.send("기본 URI에 POST 메소드가 정상적으로 실행되었습니다.");
// });

// app.get("/", (req, res) => {
//     console.log(req.query);

//     res.status(400).json({
//         KeyKey: "value 입니다.",
//         "이름입니다.": "이름일까요?",
//     });
// });

// app.get("/:id", (req, res) => {
//     console.log(req.params);

//     res.send(":id URI에 정상적으로 반환되었습니다.");
// });

// // 여기부터 통과
// // localhost:3000/api => goodsRouter
// // app.use("/api", goodsRouter);
