// Bài Tập 1
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
// 1. Mảng có bị thay đổi không?
// -> Không. Mảng students không bị thay đổi về cấu trúc, vẫn chứa 2 phần tử, và giữ nguyên các tham số
// 2. Phần tử bên trong có bị thay đổi không?
// -> Có
// 
// Nguyên nhân ở dòng spread [...students] chỉ tạo ra một mảng mới, các giá trị primitive sẽ được copy giá trị thật. 
// Các giá trị object và array bên trong chỉ copy tham chiếu (reference), không copy sâu.
// Vì vậy newStudents là mảng mới, nhưng {name: 'a'} và {name: 'b'} vẫn là cùng object với mảng gốc. 
// Nên khi sửa newStudents[0].name = 'z' → students[0] cũng bị ảnh hưởng.


// Bài tập 4
// Câu hỏi: Kết quả là bao nhiêu? Vì sao?
// Kết quả: user.address.location.lat bị thay đổi thành 999
// Vì tại dòng const newUser = { ...user } -> Có tác dụng:
// - Tạo ra 1 object mới (newUser) — khác tham chiếu với user.
// - Copy các thuộc tính ở tầng 1
//  + name: là string (primitive) → copy giá trị.
//  + address: là object → chỉ copy tham chiếu (reference).
// Cấu trúc bộ nhớ sau khi spread:
// user → object gốc
// newUser → object mới
// user.address === newUser.address (cùng tham chiếu)
// user.address.location === newUser.address.location (cùng tham chiếu)
// Do đó khi sửa newUser.address.location.lat = 999 -> user cũng bị ảnh hưởng. (Do cùng tham chiêu)
