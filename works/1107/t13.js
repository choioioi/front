'use strict';

// 클래스 만들기
// PublicKeyCredential 이거 안넣어도 된다고 해서 생략
class Member {
  // 필드명 (게터세터를 통해서 값을 처리할 때는 필드를 사용하지 않는다.)
  // name; 
  // age;

  // 생성자
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  // getters 생성 
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  get color() {
    return this._color;
  }

  // setters 생성
  set name(name) {
    this._name = name;
  }
  set age(age) {
    this._age = (age < 1) ? age * (-1) : age;
  }
  set color(color) {
    if(color == "껌정" || color == "블랙" || color == "흑색" || color== "까망" || color== "깜정") { // 만약 이렇게 들어오면
      this._color = "검정"; // 이렇게 나오게 해주세요
    }
    else {
      this._color = color; // 그 외에 색이 들어가면 컬러에 들어가게...?
    }
  } 

  // 메소드
  memberPrint() {
    console.log("성명 : " + this.name + " , 나이 : " + this.age + " , 색상 " + this.color);
  }
} 