import { img } from "./images";

export const nav = [
  { label: "Về chúng tôi", to: "/ve-chung-toi" },
  { label: "Vùng trồng", to: "/vung-trong" },
  { label: "Sản phẩm", to: "/san-pham" },
  { label: "Showroom", to: "/showroom" },
  { label: "Blog", to: "/blog" },
  { label: "Đặt chỗ", to: "/dat-cho" },
];

export const brand = {
  name: "DIEN3EAN COFFEE",
  tagline: "Mist ◆ Mountain ◆ Man",
  heroTitle: "NƠI ĐỊA HÌNH TẠO NÊN HƯƠNG VỊ",
  heroDesc:
    "DIEN3EAN COFFEE mang bản sắc Điện Biên, nơi sương, độ cao và con người cùng định hình hương vị nguyên bản của từng hạt cà phê.",
  marqueeWords: [
    "ARABICA TÂY BẮC",
    "ĐỘ CAO 800 – 1.500M",
    "SƠ CHẾ THỦ CÔNG",
    "RANG THEO LOT",
    "MINH BẠCH NGUỒN GỐC",
    "HƯƠNG VỊ NGUYÊN BẢN",
  ],
  stats: [
    { value: "800 – 1.500", label: "ĐỘ CAO (M)" },
    { value: "100%", label: "ARABICA TÂY BẮC" },
    { value: "02", label: "SHOWROOM HÀ NỘI" },
  ],
  email: "info@dien3ean.vn",
  hotline: "(+84) 91 130 93 93",
  instagram: "https://www.instagram.com/dien3eancoffee/",
  facebook: "https://www.facebook.com/dien3eancoffee",
};

export const pillars = [
  {
    key: "mist",
    title: "Mist - Sương",
    desc: "Khí hậu mát và sự chênh lệch nhiệt độ ngày – đêm của vùng núi tạo nên điều kiện đặc trưng cho cây cà phê sinh trưởng và quả phát triển.",
    image: img("seaOfClouds"),
  },
  {
    key: "mountain",
    title: "Mountain - Núi",
    desc: "Độ cao, địa hình, thổ nhưỡng và khí hậu của từng vùng góp phần hình thành đặc tính riêng của cà phê.",
    image: img("terracesAerial"),
  },
  {
    key: "man",
    title: "Man - Con người",
    desc: "Từ người trồng, thu hái, sơ chế đến người rang và pha chế – con người là mắt xích kết nối vùng đất với mỗi tách cà phê Dien3ean.",
    image: img("rawBeansHand"),
  },
];

export const regions = [
  {
    slug: "muong-ang",
    name: "Mường Ảng",
    altitude: "1.100 – 1.400 m",
    flavorTag: "THANH · NGỌT · CÂN BẰNG",
    desc: "Mường Ảng là vùng cà phê Arabica tiêu biểu của Điện Biên, nơi khí hậu mát mẻ quanh năm và thổ nhưỡng màu mỡ tạo nên những hạt cà phê có hương thơm thanh thoát, vị ngọt tự nhiên cùng hậu vị sạch và cân bằng.",
    image: img("terracesAerial"),
  },
  {
    slug: "pu-nhung",
    name: "Pú Nhung",
    altitude: "1.200 – 1.500 m",
    flavorTag: "HOA · TRÁI CÂY · NGỌT DỊU",
    desc: "Pú Nhung là vùng cà phê Arabica nằm trên những sườn núi cao của Điện Biên, nơi khí hậu mát mẻ cùng thổ nhưỡng giàu dinh dưỡng giúp hạt cà phê phát triển chậm và tích lũy hương vị tinh tế. Ly cà phê nổi bật với hương hoa nhẹ nhàng, vị trái cây chín thanh thoát và hậu vị ngọt dịu, cân bằng.",
    image: img("farmingVillageAerial"),
  },
  {
    slug: "toa-tinh",
    name: "Tỏa Tình",
    altitude: "1.100 – 1.400 m",
    flavorTag: "THANH KHIẾT · CHUA SÁNG",
    desc: "Tỏa Tình là vùng trồng Arabica nổi tiếng của Điện Biên với khí hậu ôn hòa và sương mù bao phủ quanh năm. Điều kiện tự nhiên thuận lợi tạo nên những hạt cà phê có hương thơm thanh khiết, độ chua sáng, vị ngọt tự nhiên kéo dài.",
    image: img("seaOfClouds"),
  },
  {
    slug: "quai-to",
    name: "Quài Tở",
    altitude: "1.100 – 1.400 m",
    flavorTag: "CHUA SÁNG · HẬU NGỌT SẠCH",
    desc: "Quài Tở sở hữu những nương cà phê Arabica trên vùng núi cao của Điện Biên, nơi nhiệt độ mát mẻ và biên độ nhiệt ngày đêm lớn giúp hạt cà phê phát triển hương vị rõ nét. Cà phê mang vị chua sáng, hậu ngọt sạch cùng cấu trúc cân bằng và tinh tế.",
    image: img("waterfallForest"),
  },
  {
    slug: "muong-cha",
    name: "Mường Chà",
    altitude: "1.000 – 1.300 m",
    flavorTag: "DỊU DÀNG · TRÁI CÂY CHÍN",
    desc: "Mường Chà là vùng cà phê giàu tiềm năng của Điện Biên với khí hậu mát mẻ và đất đỏ màu mỡ. Điều kiện tự nhiên thuận lợi giúp tạo nên những hạt cà phê có hương thơm dịu dàng, vị trái cây chín hài hòa cùng hậu vị ngọt sạch và kéo dài.",
    image: img("heroMisty"),
  },
];

export const productCategories = [
  { key: "nhan-xanh", name: "Nhân xanh", image: img("greenBeansPile") },
  { key: "vung-trong", name: "Cà phê theo vùng trồng", image: img("arabicaTree") },
  { key: "phin-dung-cu", name: "Phin & dụng cụ", image: img("baristaLatteHeart") },
  { key: "qua-tang", name: "Bộ quà tặng", image: img("roastLevelsBowls") },
];

export const products = [
  {
    slug: "arabica-dien-bien",
    name: "CÀ PHÊ ARABICA ĐIỆN BIÊN",
    weight: "250g",
    desc: "Những hạt Arabica được tuyển chọn từ vùng cao Điện Biên, mang trong mình dấu ấn của khí hậu mát lành, đất núi và những mùa cà phê được chăm sóc qua bàn tay người bản địa.",
    flavor: ["Thanh", "Ngọt", "Cân bằng"],
    roast: ["Nhạt", "Vừa"],
    form: ["Hạt", "Xay"],
    category: "Cà phê theo vùng trồng",
    image: img("roastedSpoon"),
  },
  {
    slug: "muong-ang",
    name: "CÀ PHÊ MƯỜNG ẢNG",
    weight: "250g",
    desc: "Từ vùng đất được biết đến với những đồi cà phê trải dài giữa núi rừng Điện Biên. Hạt cà phê mang sắc thái nhẹ nhàng, trong trẻo và hậu vị ngọt tự nhiên.",
    flavor: ["Hoa", "Mật ong", "Trái cây"],
    roast: ["Nhạt", "Vừa"],
    form: ["Hạt", "Xay"],
    category: "Cà phê theo vùng trồng",
    image: img("espressoBeansCloseup"),
  },
  {
    slug: "toa-tinh",
    name: "CÀ PHÊ TỎA TÌNH",
    weight: "250g",
    desc: "Lớn lên giữa những vùng cao Tây Bắc, cà phê Tỏa Tình thể hiện rõ nét sự giao hòa giữa độ cao, khí hậu và thổ nhưỡng, tạo nên một trải nghiệm mang dấu ấn riêng của vùng đất.",
    flavor: ["Trái cây", "Ngọt dịu", "Thanh sáng"],
    roast: ["Nhạt", "Vừa"],
    form: ["Hạt", "Xay"],
    category: "Cà phê theo vùng trồng",
    image: img("greenBeansPile"),
  },
];

export const journeySteps = [
  {
    no: "01",
    title: "THU HÁI CHỌN LỌC",
    desc: "Cà phê được thu hái chọn lọc theo độ chín, hạn chế quả xanh và quả lỗi ngay từ đầu để tạo nền tảng cho chất lượng của từng lot.",
    image: img("rawBeansHand"),
  },
  {
    no: "02",
    title: "SƠ CHẾ TẠI NGUỒN",
    desc: "Tùy đặc tính nguyên liệu và mục tiêu hương vị, từng lot được áp dụng phương pháp sơ chế phù hợp và kiểm soát xuyên suốt quá trình.",
    image: img("roastSampleTrays"),
  },
  {
    no: "03",
    title: "PHƠI & ỔN ĐỊNH",
    desc: "Cà phê được phơi có kiểm soát, đảo đều và theo dõi độ ẩm trước khi được nghỉ ổn định, giúp hạt duy trì chất lượng tốt hơn trong bảo quản và chế biến tiếp theo.",
    image: img("dryingBedsOutdoor"),
  },
  {
    no: "04",
    title: "TUYỂN CHỌN & HOÀN THIỆN",
    desc: "Hạt được làm sạch, phân loại trước khi trở thành cà phê nhân xanh hoặc được rang theo hồ sơ phù hợp với đặc tính của từng lot.",
    image: img("roastedSpoon"),
  },
];

export const locations = [
  {
    key: "joy-plus",
    tag: "DINE-IN",
    name: "Nhà hàng Joy Plus",
    address: "26 Nguyễn Công Hoan, Giảng Võ, Ba Đình, Hà Nội",
    hours: "07:00 – 16:00",
    services: ["Dine-in", "Thưởng thức tại chỗ", "Takeaway"],
    mapLink: "https://maps.app.goo.gl/WV8KB8Rg4uzzKmzL6",
    image: img("cafeMachineSteam"),
  },
  {
    key: "dinh-dong-mon",
    tag: "HERITAGE",
    name: "Đình Đông Môn",
    address: "8 P. Hàng Cân, Phố cổ Hà Nội, Hoàn Kiếm, Hà Nội",
    hours: "07:00 – 16:00",
    services: ["Thưởng thức tại chỗ", "Takeaway", "Bộ quà tặng"],
    mapLink: "https://maps.app.goo.gl/PDqw5JiygoADhJd18",
    image: img("baristaLatteHeart"),
  },
];

export const blogCategories = [
  {
    key: "vung-trong",
    name: "Vùng trồng",
    desc: "Điện Biên, Mường Ảng, Tỏa Tình, Pú Nhung, độ cao, khí hậu, thổ nhưỡng, vùng trồng.",
    image: img("terracesAerial"),
  },
  {
    key: "hat-ca-phe",
    name: "Hạt cà phê",
    desc: "Giống cà phê, sơ chế, rang, hương vị, cách nhận biết và khám phá cà phê.",
    image: img("greenBeansPile"),
  },
  {
    key: "nghe-thuat-pha",
    name: "Nghệ thuật pha",
    desc: "Phin, Pour Over, Espresso, hướng dẫn pha và cách cảm nhận hương vị.",
    image: img("baristaLatteHeart"),
  },
  {
    key: "van-hoa-trai-nghiem",
    name: "Văn hóa & Trải nghiệm",
    desc: "Workshop, sự kiện, văn hóa Tây Bắc, những cuộc gặp gỡ và trải nghiệm cùng DIEN3EAN.",
    image: img("waterfallForest"),
  },
];

export const faqs = [
  {
    q: "Cà phê DIEN3EAN được trồng ở đâu?",
    a: "DIEN3EAN phát triển cà phê từ những vùng trồng tại Điện Biên và Tây Bắc, nơi độ cao, khí hậu và thổ nhưỡng tạo nên những sắc thái riêng cho hạt cà phê. Chúng tôi tập trung khám phá và phát triển những vùng nguyên liệu còn chưa được biết đến rộng rãi.",
  },
  {
    q: "DIEN3EAN cung cấp những dòng cà phê nào?",
    a: "DIEN3EAN cung cấp cà phê nhân xanh, cà phê rang nguyên hạt và cà phê rang xay, được tuyển chọn theo vùng trồng, giống, phương pháp sơ chế và hồ sơ hương vị.",
  },
  {
    q: "Tôi có thể tìm nguồn cà phê cho quán, nhà hàng hoặc khách sạn không?",
    a: "Có. DIEN3EAN cung cấp cà phê cho quán cà phê, nhà hàng, khách sạn, văn phòng và các đối tác phân phối, với giải pháp phù hợp theo nhu cầu sử dụng và quy mô.",
  },
  {
    q: "DIEN3EAN có thể rang và đóng gói theo nhu cầu không?",
    a: "Có. Chúng tôi có thể trao đổi và phát triển sản phẩm theo nhu cầu của đối tác, từ hồ sơ hương vị, mức rang đến quy cách đóng gói, tùy theo sản phẩm và quy mô hợp tác.",
  },
  {
    q: "DIEN3EAN có hỗ trợ thử mẫu trước khi hợp tác không?",
    a: "Có. Đối tác có thể trao đổi nhu cầu sử dụng để DIEN3EAN tư vấn và lựa chọn mẫu cà phê phù hợp trước khi đi đến hợp tác.",
  },
  {
    q: "Làm thế nào để trở thành đối tác của DIEN3EAN?",
    a: "Hãy liên hệ với DIEN3EAN và chia sẻ nhu cầu của bạn. Từ nguồn cà phê, sản phẩm rang đến giải pháp cung ứng, chúng tôi sẽ cùng bạn tìm phương án phù hợp nhất.",
  },
];

export const story = {
  title: "CÂU CHUYỆN DIEN3EAN",
  paragraphs: [
    "Giữa những dãy núi trùng điệp của Tây Bắc, Điện Biên không chỉ lưu giữ những câu chuyện của lịch sử, mà còn sở hữu những vùng đất nơi cà phê đang âm thầm lớn lên. Khí hậu, thổ nhưỡng và độ cao tạo nên một sắc thái riêng cho những hạt Arabica nơi đây - một câu chuyện vẫn còn ít được biết đến trên bản đồ cà phê Việt Nam.",
    "DIEN3EAN bắt đầu từ mong muốn tìm về những vùng đất ấy. Chúng tôi gặp gỡ người trồng, lắng nghe câu chuyện của từng mùa vụ và khám phá những giá trị làm nên bản sắc của cà phê Tây Bắc. Với chúng tôi, mỗi hạt cà phê không chỉ là một sản phẩm, mà là dấu ấn của nơi nó được sinh ra và của những con người đã chăm sóc nó qua từng mùa.",
  ],
  highlight: "Đất trời tạo nên hương vị, con người giữ gìn hương vị.",
  paragraphs2: [
    "Từ lựa chọn vùng trồng, thu hái những trái chín đến sơ chế và rang, DIEN3EAN theo đuổi sự cẩn trọng trong từng công đoạn để giữ lại những đặc tính tự nhiên của hạt cà phê, đồng thời thể hiện rõ nét cá tính của từng vùng đất.",
    "Và hành trình ấy vẫn đang tiếp tục. DIEN3EAN mong muốn khám phá thêm những vùng cà phê còn ẩn mình, kết nối người trồng với những người yêu cà phê, và đưa những câu chuyện chưa được kể của Tây Bắc đến gần hơn với bản đồ cà phê Việt Nam.",
  ],
};

export const partners = {
  title: "ĐỐI TÁC & HỢP TÁC",
  desc: "Dien3ean luôn sẵn sàng kết nối với các nhà nhập khẩu, nhà phân phối, đối tác rang xay, doanh nghiệp F&B và những đơn vị quan tâm đến cà phê Việt Nam chất lượng cao.",
  desc2: "Để nhận hồ sơ sản phẩm, bảng giá, mẫu thử hoặc trao đổi về cơ hội hợp tác, vui lòng liên hệ với chúng tôi qua thông tin dưới đây.",
  image: img("farmingVillageAerial"),
};

export const footerColumns = [
  {
    title: "KHÁM PHÁ",
    links: [
      { label: "Bộ sưu tập cà phê", to: "/san-pham" },
      { label: "Quà tặng", to: "/san-pham" },
    ],
  },
  {
    title: "VỀ DIEN3EAN",
    links: [
      { label: "Về chúng tôi", to: "/ve-chung-toi" },
      { label: "Vùng trồng", to: "/vung-trong" },
    ],
  },
  {
    title: "CHÍNH SÁCH & HỢP TÁC",
    links: [
      { label: "FAQ", to: "/faq" },
      { label: "Đối tác", to: "/doi-tac" },
    ],
  },
  {
    title: "KẾT NỐI",
    links: [
      { label: "Điểm trải nghiệm", to: "/showroom" },
      { label: "Blog", to: "/blog" },
      { label: "Liên hệ", to: "/lien-he" },
    ],
  },
];
