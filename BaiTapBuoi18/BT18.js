// Bài Tập 1
const student = {
  name: 'hoang',
  parent: {
    name: 'bo hoang'
  }
}

const mentor = { ...student }

mentor.name = 'bang'
mentor.parent.name = 'bo bang'

console.log(student)
console.log(mentor)

// 1. student.name có bị đổi không?
// Không bị đổi.
// Giá trị vẫn là 'hoang'.
// 2. student.parent.name có bị đổi không?
// Có bị đổi.
// Giá trị sẽ thành 'bo bang'.
// 3. Giải thích vì sao?
// Khi dùng { ...student }, JavaScript sẽ copy các thuộc tính ở lớp ngoài cùng, Những gì ở bên trong (object con) thì chỉ chia sẻ địa chỉ, không copy thật sự.
// -> Do đó mentor.parent là một object → chỉ copy tham chiếu (reference), không copy nội dung object.
// -> Vì vậy khi này mentor.parent và student.parent cùng trỏ về .parent
// -> Lúc này student.parent và mentor.parent là cùng một object, nên khi thay đổi mentor.parent.name, student.parent.name cũng bị ảnh hưởng.


// Bài Tập 2
const student = {
  name: 'hoang',
  parent: {
    name: 'bo hoang'
  }
}

const mentor = JSON.parse(JSON.stringify(student))

mentor.parent.name = 'bo bang'

console.log(student)
console.log(mentor)
// 1. student.parent.name có bị ảnh hưởng không?
// Không bị ảnh hưởng.
// Sau khi chạy:
// -> student.parent.name vẫn là 'bo hoang'
// -> mentor.parent.name là 'bo bang'
// Nguyên nhân là vì:
// JSON.stringify(student) → chuyển object thành chuỗi văn bản, và không còn giữ liên kết với object cũ
// JSON.parse(...) → tạo ra object mới hoàn toàn, bao gồm cả object con (parent).
// Nên khi này mentor và student là 2 object độc lập, không còn chung reference nào nữa.
// 2. Vì sao cách này khác spread (const mentor = { ...student })
// Vì JSON.parse(JSON.stringify()) có thể copy ở tầng sâu nên có thể copy nội dung của các object có nhiều tầng. Thay đổi nội dung ở object con -> Không ảnh hưởng đến object gốc
// Còn Spread chỉ copy ở tầng nông và các object từ tầng thứ 2 chỉ copy tham chiếu (reference), không copy nội dung object. Thay đổi nội dung ở object con -> Ảnh hưởng đến object gốc

// Bài tập 3
const students = [
  { name: 'a' },
  { name: 'b' }
]

const newStudents = [...students]

newStudents[0].name = 'z'

console.log(students)
console.log(newStudents)