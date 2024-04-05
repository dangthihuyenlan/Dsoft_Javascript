// 1 number

let a = 10; 

let b = 3.14; 


// các phép toán học
let sum = a + b; // Cộng
let difference = a - b; // Trừ
let product = a * b; // Nhân
let quotient = a / b; // Chia
let remainder = a % 3; // Lấy phần dư

// kiểm tra dữ liệu
console.log(typeof a); // In ra "number"
console.log(typeof b); // In ra "number"


//chuyển đổi dữ liệu
let c = "5";
 // Chuyển đổi từ chuỗi sang số nguyên
let convertedNumber = parseInt(c);
console.log(convertedNumber); // In ra 5
let anotherNumberAsString = "3.14";
let convertedFloat = parseFloat(anotherNumberAsString); // Chuyển đổi từ chuỗi sang số thực
console.log(convertedFloat); // In ra 3.14

//hằng số toán học
console.log(Math.PI); // Pi
console.log(Number.MAX_VALUE); // Số lớn nhất có thể biểu diễn bằng kiểu dữ liệu Number

//hàm toán học
// làm tròn xuống
console.log(Math.floor(3.7)); // Kết quả: 3
// làm tròn lên
console.log(Math.ceil(3.1)); // Kết quả: 4

// trả về 1 giá trị ngẫu nhiên từ 0 đến 1 (không bao gồm 1)
console.log(Math.random()); // Kết quả: một số ngẫu nhiên từ 0 đến 1

// trả về giá trị lớn nhất từ 1 dãy số
console.log(Math.max(5, 2, 10)); // Kết quả: 10

//trả về giá trị nhỏ nhất từ 1 dãy số
console.log(Math.min(5, 2, 10)); // Kết quả: 2

// Trả về số n mũ base.
console.log(Math.pow(2, 3)); // Kết quả: 8 (2 mũ 3)



// 2. string
let greeting = 'Hello, world!';
let name = "Dang Thi Huyen Lan";

 // In ra ký tự đầu tiên của chuỗi
console.log(greeting[0]);

// In ra ký tự thứ tư của chuỗi
console.log(name.charAt(3));
// In ra độ dài của chuỗi 
console.log(greeting.length); 
// Nối hai chuỗi
let fullName = 'Dang' + ' ' + 'Lan'; 
console.log(fullName); // In ra "Dang Lan"
// Tách chuỗi thành một mảng các từ
let words = greeting.split(','); 
console.log(words); // In ra ["Hello", " world!"]
 // Thay thế từ "world" bằng "everyone"
let newGreeting = greeting.replace('world', 'everyone');
console.log(newGreeting); // In ra "Hello, everyone!"
 // Chuyển đổi chuỗi thành chữ hoa, chữ thường
console.log(name.toUpperCase()); //"DANG THI HUYEN LAN"
console.log(name.toLowerCase()); //"dàng thi huyen lan"

// Kiểm tra xem chuỗi có chứa "world" không
console.log(greeting.includes('world')); 
let stringWithSpaces = '  Hello, world!  ';
console.log(stringWithSpaces.trim()); // In ra "Hello, world!"
console.log('abc' === 'ABC'); // So sánh hai chuỗi (false)
console.log('abc'.localeCompare('ABC', 'en', { sensitivity: 'accent' })); // So sánh có phân biệt hoa thường (1)


// 3.array

let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];
let mixedArray = [1, 'apple', true];

 // In ra phần tử đầu tiên của mảng
console.log(numbers[0]); //in ra 1

 // Thay đổi phần tử thứ hai của mảng
fruits[1] = 'grape';
console.log(fruits); // In ra ['apple', 'grape', 'orange']
 // In ra độ dài của mảng 
console.log(numbers.length);//in ra 5

 // Thêm phần tử vào cuối mảng
fruits.push('kiwi');
console.log(fruits); // In ra ['apple', 'grape', 'orange', 'kiwi']

 // Xóa phần tử ở cuối mảng
let removedItem = fruits.pop();
console.log(removedItem); // In ra phần tử bị xóa (kiwi)
console.log(fruits); // In ra ['apple', 'grape', 'orange']

//lặp các phần tử mảng
fruits.forEach(function(item) {
    console.log(item);
});

// Hoặc sử dụng vòng lặp for
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

 // Tìm vị trí của phần tử 'grape' trong mảng
let index = fruits.indexOf('grape');
console.log(index); // In ra 1

// Sắp xếp các phần tử trong mảng theo thứ tự bảng chữ cái
fruits.sort(); 
console.log(fruits); // In ra ['apple', 'grape', 'orange']



//4. Object
//khai báo một đối tượng
let person = {
    name: 'Lan',
    age: 21,
    gender: 'female'
};

let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};
// Truy cập giá trị của thuộc tính "name"
console.log(person.name); //Lan

 // Thay đổi giá trị của thuộc tính "age"
person.age = 21;
console.log(person); // In ra đối tượng sau khi thay đổi
person.job = 'engineer';
console.log(person); // In ra đối tượng với thuộc tính mới

delete car.year;
console.log(car); // In ra đối tượng sau khi xóa thuộc tính "year"

for (let key in person) {
    console.log(key + ': ' + person[key]);
}
let person2 = {
    name: 'lan',
    age: 20,
    gender: 'female'
};

console.log(JSON.stringify(person) === JSON.stringify(person2)); // So sánh đối tượng (true)
 // Sao chép đối tượng
let clonedPerson = Object.assign({}, person);
console.log(clonedPerson); // In ra đối tượng đã sao chép
// Kiểm tra xem thuộc tính "name" có tồn tại trong đối tượng không (true)
console.log('name' in person); 
// Lấy danh sách các key của đối tượng
console.log(Object.keys(person)); 
// Lấy danh sách các value của đối tượng
console.log(Object.values(person)); 
// Tạo một đối tượng Date
let dateObject = new Date(); 
// Sử dụng phương thức của đối tượng Date
console.log(dateObject.getFullYear()); 

