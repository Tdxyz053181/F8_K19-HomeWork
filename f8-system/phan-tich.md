Câu 1: Selector nào có độ ưu tiên cao nhất trong CSS?

Trong CSS, Selector có độ ưu tiên cao nhất trong CSS là Inline Style. Do là đây là Selector chi tiết nhất được viết trực tiếp trong phần tử HTML

Sắp xếp độ ưu tiên của từng selector: Inline style > #id > .class > Element selector (p, h1, div) > Universal selector(*)

Câu 2: Nếu một phần tử HTML có cả h1, .title, và #main cùng set color — selector nào thắng? Tại sao?

Universal selector #main vì độ ưu tiên của id cao nhất (#id > .class > Element selector)


Câu 3: Nếu bạn thêm style="color: pink" trực tiếp vào phần tử ở Câu 2, kết quả thay đổi như thế nào?

Kết quả là phần h1 sẽ ăn css của Inline style (style="color: pink") do trong css Inline Style là selector có độ ưu tiên cao nhất

Câu 4: Tại sao theme.css có thể override style từ base.css? Điều kiện để override thành công là gì?

Do trình  duyệt đọc CSS từ trên xuống dưới. Vì theme.css được tải sau nên các style trong file này có thể ghi đè style trong base.css.

Điều kiện để override thành công:
Cần link theme.css (file cần ghi đè) sau cùng 

Câu 5: Trong project của bạn, có hai phần tử đều dùng class .title nhưng hiển thị màu khác nhau. Giải thích tại sao.

Các trường hợp, có hai phần tử đều dùng class .title nhưng hiển thị màu khác nhau thì có thể rơi vào một trong các trường hợp sau

1. Selector cụ thể hơn

.title {
    color: blue;
}

.header .title {
    color: red;
}

Giải thích:
Selector .header .title có độ ưu tiên cao hơn .title, nên phần tử .title nằm trong .header sẽ có màu đỏ.


2. Bị ảnh hưởng bởi ID selector

#main .title {
    color: green;
}

.title {
    color: blue;
}

Giải thích:
Selector có ID + class nên có độ ưu tiên cao hơn chỉ dùng class.

3. Có inline style

<h2 class="title">Title</h2>

<h2 class="title" style="color:red;">Title</h2>

Giải thích:
Inline style có độ ưu tiên cao nhất nên sẽ ghi đè CSS.

Câu 6: Phần tử nào trong project của bạn có CSS phức tạp nhất? Liệt kê các selector tác động lên nó và giải thích selector nào thắng cuối cùng.

Phần tử nào trong project có CSS phức tạp nhất
<h1 class="title" id="special" style="color: blue">

<!--
  Phan tu nay co: tag(h1) + class(.title) + id(#special) + inline style
  Selector thang: inline style vì là selector có độ ưu tiên cao nhất nên ghi đè thuộc tính css "color: blue" (Sắp xếp độ ưu tiên của các selector: Inline style > #id > .class > Element selector (p, h1, div) > Universal selector(*))
  Mau hien thi: blue
-->
