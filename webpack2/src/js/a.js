let a = 3;
const komo = ({ x = 3, y } = { x: 5, y: 4 }) => {
    console.log(x, "y:", y);
    return y;
}

class clc {
    constructor(name, sex) {
        this.name = name;
        // this.name=this.name.bind(this) = name;
        this.sex = sex;
    }
    getName() {
        console.log(this.name + "ff")
    }
}

class ab extends clc {
    constructor(name, sex, height) {
        super(name, sex);
        this.height = "177cm";
    }
    getHeight() {
        console.log(this.height + "cm");
    }
    Name() {
        super.getName();
    }
}
// export default clc1;
export {ab}
// module.exports = a;
// export { komo };

//  错误写法↓
// export default { komo };
//  错误写法↑

// 下面两种写法都可以的
// export default komo;
// export default function () {
//     console.log("dddddddddd")
//     return a=1;
// }