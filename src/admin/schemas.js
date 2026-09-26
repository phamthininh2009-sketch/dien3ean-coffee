export const regionsSchema = {
  table: "regions",
  title: "Vùng trồng",
  description: "Các vùng trồng hiển thị ở trang chủ và trang Vùng trồng.",
  titleField: "name",
  fields: [
    { name: "name", label: "Tên vùng", type: "text" },
    { name: "slug", label: "Đường dẫn (không dấu)", type: "text", help: "Ví dụ: muong-ang" },
    { name: "altitude", label: "Độ cao", type: "text", placeholder: "1.100 – 1.400 m" },
    { name: "flavor_tag", label: "Hương vị", type: "text", placeholder: "THANH · NGỌT · CÂN BẰNG" },
    { name: "description", label: "Mô tả", type: "textarea", rows: 5 },
    { name: "image_url", label: "Ảnh vùng trồng", type: "image" },
    { name: "sort_order", label: "Thứ tự hiển thị", type: "number" },
  ],
};

export const productsSchema = {
  table: "products",
  title: "Sản phẩm",
  description: "Cà phê hiển thị ở trang chủ, trang Sản phẩm và trang chi tiết.",
  titleField: "name",
  fields: [
    { name: "name", label: "Tên sản phẩm", type: "text" },
    { name: "slug", label: "Đường dẫn (không dấu)", type: "text", help: "Ví dụ: muong-ang" },
    { name: "category", label: "Phân loại", type: "text", help: "Hiện trên nhãn góc ảnh" },
    { name: "weight", label: "Định lượng", type: "text", placeholder: "250g" },
    { name: "description", label: "Mô tả", type: "textarea", rows: 5 },
    { name: "flavor", label: "Hương vị", type: "tags", placeholder: "Thanh, Ngọt, Cân bằng" },
    { name: "roast", label: "Mức rang", type: "tags", placeholder: "Nhạt, Vừa" },
    { name: "form", label: "Dạng", type: "tags", placeholder: "Hạt, Xay" },
    { name: "image_url", label: "Ảnh sản phẩm", type: "image" },
    { name: "sort_order", label: "Thứ tự hiển thị", type: "number" },
  ],
};

export const productCategoriesSchema = {
  table: "product_categories",
  title: "Danh mục sản phẩm",
  description: "Dùng cho thanh lọc ở trang Sản phẩm.",
  titleField: "name",
  fields: [
    { name: "name", label: "Tên danh mục", type: "text" },
    { name: "key", label: "Mã (không dấu)", type: "text", help: "Ví dụ: nhan-xanh" },
    { name: "image_url", label: "Ảnh", type: "image" },
    { name: "sort_order", label: "Thứ tự hiển thị", type: "number" },
  ],
};

export const locationsSchema = {
  table: "locations",
  title: "Showroom",
  description: "Các điểm trải nghiệm hiển thị ở trang chủ và trang Showroom.",
  titleField: "name",
  fields: [
    { name: "name", label: "Tên địa điểm", type: "text" },
    { name: "key", label: "Mã (không dấu)", type: "text", help: "Ví dụ: joy-plus" },
    { name: "tag", label: "Nhãn", type: "text", placeholder: "NHÀ HÀNG" },
    { name: "address", label: "Địa chỉ", type: "text" },
    { name: "hours", label: "Giờ mở cửa", type: "text", placeholder: "07:00 – 16:00" },
    { name: "services", label: "Dịch vụ", type: "tags", placeholder: "Thưởng thức tại chỗ, Mang đi" },
    { name: "map_link", label: "Link Google Maps", type: "text" },
    { name: "image_url", label: "Ảnh", type: "image" },
    { name: "sort_order", label: "Thứ tự hiển thị", type: "number" },
  ],
};

export const blogCategoriesSchema = {
  table: "blog_categories",
  title: "Danh mục blog",
  description: "Dùng cho thanh lọc ở trang Blog.",
  titleField: "name",
  fields: [
    { name: "name", label: "Tên danh mục", type: "text" },
    { name: "key", label: "Mã (không dấu)", type: "text" },
    { name: "description", label: "Mô tả", type: "textarea", rows: 3 },
    { name: "image_url", label: "Ảnh", type: "image" },
    { name: "sort_order", label: "Thứ tự hiển thị", type: "number" },
  ],
};

export function blogPostsSchema(categories = []) {
  return {
    table: "blog_posts",
    title: "Bài viết blog",
    description:
      "Bài chỉ hiển thị trên website khi đã có Ngày đăng. Để trống ngày nếu muốn lưu nháp.",
    titleField: "title",
    orderBy: "published_at",
    fields: [
      { name: "title", label: "Tiêu đề", type: "text" },
      { name: "slug", label: "Đường dẫn (không dấu)", type: "text" },
      {
        name: "category_id",
        label: "Danh mục",
        type: "select",
        emptyLabel: "Chưa phân loại",
        options: categories.map((c) => ({ value: c.id, label: c.name })),
      },
      { name: "excerpt", label: "Mô tả ngắn", type: "textarea", rows: 3 },
      { name: "cover_image_url", label: "Ảnh bìa", type: "image" },
      { name: "published_at", label: "Ngày đăng", type: "date", help: "Để trống = bản nháp" },
      {
        name: "content",
        label: "Nội dung bài viết",
        type: "richtext",
        rows: 20,
        help: "Cách dòng trống giữa các đoạn. Tiêu đề mục: ## Tiêu đề. Ảnh: ![chú thích](đường-dẫn-ảnh). Gạch đầu dòng: - nội dung. Các bước: 1. nội dung",
      },
    ],
  };
}

// Editors for content that used to live in the source code
export const settingsSchemas = {
  brand: {
    kind: "object",
    fields: [
      { name: "name", label: "Tên thương hiệu", type: "text" },
      { name: "tagline", label: "Khẩu hiệu", type: "text" },
      { name: "heroEyebrow", label: "Dòng nhỏ trên trang chủ", type: "text" },
      { name: "heroTitle", label: "Tiêu đề phụ trang chủ", type: "text" },
      { name: "heroDesc", label: "Mô tả trang chủ", type: "textarea", rows: 3 },
      { name: "hotline", label: "Hotline", type: "text" },
      { name: "email", label: "Email", type: "text" },
      { name: "address", label: "Địa chỉ trụ sở", type: "text" },
      { name: "instagram", label: "Link Instagram", type: "text" },
      { name: "facebook", label: "Link Facebook", type: "text" },
      { name: "marqueeWords", label: "Dòng chữ chạy", type: "lines", rows: 7 },
      {
        name: "stats",
        label: "Số liệu nổi bật",
        type: "objectList",
        itemLabel: "Số liệu",
        fields: [
          { name: "value", label: "Con số", type: "text" },
          { name: "label", label: "Chú thích", type: "text" },
        ],
      },
    ],
  },
  pillars: {
    kind: "list",
    itemLabel: "Trụ cột",
    fields: [
      { name: "key", label: "Mã", type: "text" },
      { name: "title", label: "Tiêu đề", type: "text" },
      { name: "desc", label: "Mô tả", type: "textarea", rows: 4 },
      { name: "image", label: "Ảnh", type: "image" },
    ],
  },
  journey_steps: {
    kind: "list",
    itemLabel: "Bước",
    fields: [
      { name: "no", label: "Số thứ tự", type: "text" },
      { name: "title", label: "Tiêu đề", type: "text" },
      { name: "desc", label: "Mô tả", type: "textarea", rows: 4 },
      { name: "image", label: "Ảnh", type: "image" },
    ],
  },
  story: {
    kind: "object",
    fields: [
      { name: "heading", label: "Tiêu đề", type: "text" },
      { name: "paragraphs", label: "Đoạn mở đầu", type: "lines", rows: 8, help: "Mỗi dòng là một đoạn" },
      { name: "highlight", label: "Câu nhấn mạnh", type: "text" },
      { name: "paragraphs2", label: "Đoạn tiếp theo", type: "lines", rows: 8 },
      { name: "gallery", label: "Ảnh minh họa", type: "imageList", itemLabel: "Ảnh" },
    ],
  },
  partners: {
    kind: "object",
    fields: [
      { name: "title", label: "Tiêu đề", type: "text" },
      { name: "desc", label: "Mô tả 1", type: "textarea", rows: 3 },
      { name: "desc2", label: "Mô tả 2", type: "textarea", rows: 3 },
      { name: "bullets", label: "Danh sách gạch đầu dòng", type: "lines", rows: 5 },
      { name: "image", label: "Ảnh bìa", type: "image" },
    ],
  },
  faqs: {
    kind: "list",
    itemLabel: "Câu hỏi",
    fields: [
      { name: "q", label: "Câu hỏi", type: "text" },
      { name: "a", label: "Câu trả lời", type: "textarea", rows: 4 },
    ],
  },
  page_images: {
    kind: "object",
    fields: [
      { name: "home", label: "Trang chủ", type: "image" },
      { name: "about", label: "Về chúng tôi", type: "image" },
      { name: "regions", label: "Vùng trồng", type: "image" },
      { name: "products", label: "Sản phẩm", type: "image" },
      { name: "showroom", label: "Showroom", type: "image" },
      { name: "blog", label: "Blog", type: "image" },
      { name: "faq", label: "FAQ", type: "image" },
      { name: "contact", label: "Liên hệ", type: "image" },
    ],
  },
  page_copy: {
    kind: "pageCopy",
    pages: [
      { key: "about", label: "Về chúng tôi" },
      { key: "regions", label: "Vùng trồng" },
      { key: "products", label: "Sản phẩm" },
      { key: "showroom", label: "Showroom" },
      { key: "blog", label: "Blog" },
      { key: "faq", label: "FAQ" },
      { key: "contact", label: "Liên hệ" },
    ],
  },
};
