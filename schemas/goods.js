const mongoose = require("mongoose");

const goodsSchema = new mongoose.Schema({
  goodsId: {
    type: Number, // 숫자 타입
    required: true, // 무조건 값이 존재해야 함
    unique: true, // 고유한 값, 중복된 값 허용 X
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  thumbnailUrl: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
});

// Goods라는 콜렉션 명, goodsSchema 실제 데이터가 생성될 스키마에 대한 값
module.exports = mongoose.model("Goods", goodsSchema);
