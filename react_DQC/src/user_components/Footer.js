import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
/* footer */
.footer {
  border-top: 3px solid #f53d2d;
  top: 180px;
  position: relative;
  background-color: #ffffff;
}

.footer {
  font-size: 12px;
}

.footer .title {
  color: #666;
}

.footer .desc {
  color: #888;
}

.fl-sale{
  padding-left: 16px;
width: 114px;
height: 30px;
line-height: 30px;
text-transform: uppercase;
display: inline-block;
background-size: contain;
background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/fb1088de81e42c4e538967ec12cb5caa.png);
background-repeat: no-repeat;
}
`;
const Footer = () => {
  return (
    <>
      <StyledFooter>
      <div className="footer">
        <div className="container pt-5">
          <strong className=" font-weight-bold fs-6">
            SHOPEE - GÌ CŨNG CÓ, MUA HẾT Ở SHOPEE
          </strong>
          <p className="desc">
            Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và
            miễn phí! Shopee là nền tảng giao dịch trực tuyến hàng đầu ở Đông
            Nam Á, có trụ sở chính ở Singapore, đã có mặt ở khắp các khu vực
            Singapore, Malaysia, Indonesia, Thái Lan, Philippines, Đài Loan,
            Brazil, México &amp; Colombia. Với sự đảm bảo của Shopee, bạn sẽ mua
            hàng trực tuyến an tâm và nhanh chóng hơn bao giờ hết!
          </p>
          <strong>
            MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN
          </strong>
          <p className="mt-3">
            Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến
            thì Shopee.vn là một sự lựa chọn tuyệt vời dành cho bạn. Shopee là
            trang thương mại điện tử cho phép người mua và người bán tương tác
            và trao đổi dễ dàng thông tin về sản phẩm và chương trình khuyến mãi
            của shop. Do đó, việc mua bán trên Shopee trở nên nhanh chóng và đơn
            giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi
            trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng
            sản phẩm chính hãng, uy tín, Shopee Mall chính là sự lựa chọn lí
            tưởng dành cho bạn. Để bạn có thể dễ dàng khi tìm hiểu và sử dụng
            sản phẩm, Shopee Blog - trang blog thông tin chính thức của Shopee -
            sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng thời
            trang, review công nghệ, mẹo làm đẹp, tin tức tiêu dùng và deal giá
            tốt bất ngờ.
          </p>
          <p className="mt-2">
            Đến với Shopee, cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao
            giờ hết. Chỉ với vài thao tác trên ứng dụng, bạn đã có thể đăng bán
            ngay những sản phẩm của mình. Không những thế, các nhà bán hàng có
            thể tự tạo chương trình khuyến mãi trên Shopee để thu hút người mua
            với những sản phẩm có mức giá hấp dẫn. Khi đăng nhập tại Shopee Kênh
            người bán, bạn có thể dễ dàng phân loại sản phẩm, theo dõi đơn hàng,
            chăm sóc khách hàng và cập nhập ngay các hoạt động của shop.
          </p>
          <strong className=" mt-5">
            TẢI ỨNG DỤNG SHOPEE NGAY ĐỂ MUA BÁN ONLINE MỌI LÚC, MỌI NƠI
          </strong>
          <p className="mt-2">
            Ưu điểm của ứng dụng Shopee là cho phép bạn mua và bán hàng mọi lúc,
            mọi nơi. Bạn có thể tải ứng dụng Shopee cũng như đăng sản phẩm bán
            hàng một cách nhanh chóng và tiện lợi. Ngoài ra, ứng dụng Shopee còn
            có những ưu điểm sau:
          </p>
          <li className="ms-5 mt-2">
            Giao diện thân thiện, đơn giản, dễ sử dụng. Bạn sẽ dễ dàng thấy được
            ngay những sản phẩm nổi bật cũng như dễ dàng tìm đến các ô tìm kiếm,
            giỏ hàng hoặc tính năng chat liền tay.
          </li>
          <li className="ms-5 mt-2">
            Ứng dụng tích hợp công nghệ quản lý đơn mua và bán hàng tiện lợi
            trên cùng một tài khoản. Bạn sẽ vừa là người mua hàng, vừa là người
            bán hàng rất linh hoạt, dễ dàng.
          </li>
          <li className="ms-5 mt-2">
            Cập nhập thông tin khuyến mãi, Shopee Flash Sale nhanh chóng và liên
            tục.
          </li>
          <p className="mt-3">
            Tại Shopee, bạn có thể lưu các mã giảm giá Shopee và mã miễn phí vận
            chuyển toàn quốc. Bên cạnh đó, Shopee cũng sẽ có những chiến dịch
            khuyến mãi lớn hằng năm như Shopee 2.2, Siêu hội tiêu dùng 15.3,
            Shopee 4.4 sale, Shopee 5.5 sale, Shopee sale 7.7,Shopee sale 8.8,
            Shopee sale 9.9, Shopee 10.10 sale, Shopee 11.11 sale, Shopee Sale
            sinh nhật; Khuyến Mãi Tết thả ga săn sale quà Tết chất lượng. Đây là
            thời điểm để người mua hàng có thể nhanh tay chọn ngay cho mình
            những mặt hàng ưa thích với mức giá giảm kỉ lục. Ngoài ra, bạn còn
            có thể thỏa thích săn sale vào các ngày trong tháng như Sale giữa
            tháng và Sale cuối tháng đón lương về .
          </p>
          <strong className="mt-3">
            MUA HÀNG HIỆU CAO CẤP GIÁ TỐT TẠI SHOPEE
          </strong>
          <p className="mt-2">
            Bên cạnh Shopee Premium, Shopee còn có rất nhiều khuyến mãi khủng
            cho hàng hiệu giảm đến 50%. Cộng với mã giao hàng miễn phí, Shopee
            cũng có các mã giảm giá được phân phối mỗi tháng từ rất nhiều gian
            hàng chính hãng tham gia chương trình khuyến mãi này. Bên cạnh đó,
            Shopee còn tập hợp rất nhiều thương hiệu đình đám được các nhà bán
            lẻ uy tín phân phối bán trên Shopee, top sản phẩm hot deal cho bạn
            săn sale luôn cập nhật mỗi giờ, mỗi ngày, đem đến cho bạn sự lựa
            chọn đa dạng, từ các hãng mỹ phẩm nổi tiếng hàng đầu như Kiehl's,
            MAC, Foreo, SK-II, Estee Lauder,... Đến những thương hiệu công nghệ
            nổi tiếng như camera hành trình Gopro, máy ảnh Fuifilm, webcam
            Hikvision, máy đọc sách Kindle,... Tại Shopee, bạn có thể dễ dàng
            tìm thấy các thương hiệu giày thể thao phổ biến hiện nay như:
            Converse, New Balance, Nike, Vans, Crocs,...{" "}
          </p>
          <strong className="mt-4">
            MUA HÀNG CHÍNH HÃNG TỪ CÁC THƯƠNG HIỆU LỚN VỚI SHOPEE
          </strong>
          <p className="mt-2">
            Mua hàng trên Shopee luôn là một trải nghiệm ấn tượng. Dù bạn đang
            có nhu cầu mua bất kỳ mặt hàng thời trang nam, thời trang nữ, đồng
            hồ, điện thoại, nước rửa tay khô hay khẩu trang N95 thì Shopee cũng
            sẽ đảm bảo cung cấp cho bạn những sản phẩm ưng ý. Bên cạnh đó,
            Shopee cũng có sự tham gia của các thương hiệu hàng đầu thế giới ở
            đa dạng nhiều lĩnh vực khác nhau. Trong đó có thể kể đến Samsung,
            OPPO, Xiaomi, Innisfree, Unilever, P&amp;G, Biti’s,...Các thương
            hiệu này hiện cũng đã có cửa hàng chính thức trên Shopee Mall với
            hàng trăm mặt hàng chính hãng, được cập nhập liên tục. Là một kênh
            bán hàng uy tín, Shopee luôn cam kết mang lại cho khách hàng những
            trải nghiệm mua sắm online giá rẻ, an toàn và tin cậy. Mọi thông tin
            về người bán và người mua đều được bảo mật tuyệt đối. Các hoạt động
            giao dịch thanh toán tại Shopee luôn được đảm bảo diễn ra nhanh
            chóng, an toàn. Một vấn đề nữa khiến cho các khách hàng luôn quan
            tâm đó chính là mua hàng trên Shopee có đảm bảo không.
          </p>
          <p className="mt-2">
            Shopee luôn cam kết mọi sản phẩm trên Shopee, đặc biệt là Shopee
            Mall đều là những sản phẩm chính hãng, đầy đủ tem nhãn, bảo hành từ
            nhà bán hàng. Ngoài ra, Shopee bảo vệ người mua và người bán bằng
            cách giữ số tiền giao dịch đến khi người mua xác nhận đồng ý với đơn
            hàng và không có yêu cầu khiếu nại, trả hàng hay hoàn tiền nào.
            Thanh toán sau đó sẽ được chuyển đến cho người bán. Đến với Shopee
            ngay hôm nay để mua hàng online giá rẻ và trải nghiệm dịch vụ chăm
            sóc khách hàng tuyệt vời tại đây. Đặc biệt khi mua sắm trên Shopee
            Mall, bạn sẽ được miễn phí vận chuyển, giao hàng tận nơi và 7 ngày
            miễn phí trả hàng. Ngoài ra, khách hàng có thể sử dụng Shopee Xu để
            đổi lấy mã giảm giá có giá trị cao và voucher dịch vụ hấp dẫn. Tiếp
            đến là Shopee Home Club, Shopee Mum Club, Shopee Beauty Club và
            Shopee Book Club với các ưu đãi độc quyền từ các thương hiệu lớn có
            những khách hàng đã đăng ký làm thành viên. Hãy truy cập ngay
            Shopee.vn hoặc tải ngay ứng dụng Shopee về điện thoại ngay hôm nay!
          </p>
        </div>
        <footer style={{ backgroundColor: "#fbfbfb" }}>
          <div className="container pt-5">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <strong className=" font-weight-bold">
                  CHĂM SÓC KHÁCH HÀNG
                </strong>
                <p className="mb-1 mt-2 desc">Trung Tâm Trợ Giúp</p>
                <p className="mb-1 desc">Shopee Blog</p>
                <p className="mb-1 desc">Shopee Mall</p>
                <p className="mb-1 desc">Hướng Dẫn Mua Hàng</p>
              </div>
              <div className="d-flex flex-column ml-5">
                <strong className=" font-weight-bold">VỀ SHOPEE</strong>
                <p className="mb-1 mt-2 desc ">Giới Thiệu Về Shopee Việt Nam</p>
                <p className="mb-1 desc">Tuyển Dụng</p>
                <p className="mb-1 desc">Điều Khoản Shopee</p>
                <p className="mb-1 desc">Chính Sách Bảo Mật</p>
              </div>
              <div className="d-flex flex-column ml-5">
                <strong className=" font-weight-bold">THANH TOÁN</strong>
                <div className="d-flex align-items-center">
                  <img
                    src="assets/thanhtoan.jpg"
                    alt=""
                    width="240px"
                    height="120px"
                    className="mt-3"
                  />
                </div>
                <strong className=" font-weight-bold mt-4">
                  ĐƠN VỊ VẬN CHUYỂN
                </strong>
                <div className="d-flex align-items-center">
                  <img
                    src="assets/vanchuyen.jpg"
                    alt=""
                    width="240px"
                    height="120px"
                    className="mt-3"
                  />
                </div>
              </div>
              <div className="d-flex flex-column ml-5">
                <strong className=" font-weight-bold">
                  THEO DÕI CHÚNG TÔI TRÊN
                </strong>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mt-3 ">
                    <img src="assets/facec.png" width={20} height={20} alt="" />
                    <span className="desc ml-3">Facebook</span>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <img
                      src="assets/logo.jpg"
                      width={20}
                      height={20}
                      alt=""
                      className="bi bi"
                    />
                    <span className="desc ml-3">Zalo</span>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <img src="assets/ig.jpg" width={20} height={20} alt="" />
                    <span className="desc ml-3">Instagram</span>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column ml-5">
                <strong className=" font-weight-bold">
                  TẢI ỨNG DỤNG SHOPEE NGAY THÔI
                </strong>
                <div className="d-flex align-items-center mt-3">
                  <img src="assets/barcode.png" alt="" />
                  <div className="d-flex flex-column">
                    <img src="assets/goggle.png" alt="" />
                    <img src="assets/app.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div
              className="d-flex justify-content-between mt-5 pb-3"
              style={{ color: "#888" }}
            >
              <span className="fs-6">
                {" "}
                © 2024 Shopee. Tất cả các quyền được bảo lưu.{" "}
              </span>
              <span className="fs-6">
                Quốc gia &amp; Khu vực: Singapore | Indonesia | Đài Loan | Thái
                Lan | Malaysia | Việt Nam | Philipines |
              </span>
            </div>
          </div>
        </footer>
      </div>
      {/* Optional JavaScript */}
      {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </StyledFooter>
    </>
  );
};

export default Footer;
