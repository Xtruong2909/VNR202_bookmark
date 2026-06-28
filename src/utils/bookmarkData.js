
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';
import img11 from '../assets/11.png';
import img12 from '../assets/12.png';

// Mapping rules:
// Bookmark 1-5: Front = 2, 3, 4, 5, 6. Back = 1.
// Bookmark 6-10: Front = 8, 9, 10, 11, 12. Back = 7.

const bookmarkSources = {
    1: {
        source: 'Hình AI',
        sourceUrl: null
    },
    2: {
        source: 'Tranh “Phong trào Xô viết Nghệ Tĩnh” trưng bày tại Bảo tàng Lịch sử quốc gia.',
        sourceUrl: 'https://nhandan.vn/special/Nguyen-Ai-Quoc-voi-phong-trao-Xo-viet-Nghe-Tinh/index.html'
    },
    3: {
        source: 'Hình AI',
        sourceUrl: null
    },
    4: {
        source: 'Hình AI',
        sourceUrl: null
    },
    5: {
        source: 'Lán Khuổi Nậm ở Pác Bó, xã Trường Hà, huyện Hà Quảng, Cao Bằng  nơi diễn ra Hội nghị Trung ương Đảng cộng sản Đông dương lần thứ VIII (5/1941)',
        sourceUrl: 'https://baotanglichsu.vn/vi/Articles/3097/14317/hoi-nghi-lan-thu-viii-ban-chap-hanh-trung-uong-djang-va-quyet-djinh-tien-hanh-cong-cuoc-giai-phong-dan-toc-tu-ngay-10-djen-ngay-19-5-1941.html'
    },
    6: {
        source: 'Hình AI',
        sourceUrl: null
    },
    7: {
        source: 'Ảnh: Lễ thành lập Đội Việt Nam Tuyên truyền Giải phóng quân tại khu rừng Trần Hưng Đạo, huyện Nguyên Bình, tỉnh Cao Bằng, ngày 22/12/1944.',
        sourceUrl: 'https://baotanglichsu.vn/vi/Articles/3097/75108/su-kien-thanh-lap-djoi-viet-nam-tuyen-truyen-giai-phong-quan-qua-suu-tap-hien-vat-tai-lieu-tai-bao-tang-lich-su-quoc-gia.html'
    },
    8: {
        source: 'Toàn quyền Đông Dương Decoux đón tướng Nhật sau ngày Nhật đảo chính Pháp. Ảnh: Bảo tàng Lịch sử Quốc gia.',
        sourceUrl: 'https://baovanhoa.vn/doi-song/nhat-dao-chinh-phap-tai-dong-duong-209693.html'
    },
    9: {
        source: '15 ngày (từ ngày 14 - 28/8) cuộc Tổng khởi nghĩa giành chính quyền đã thực hiện trên cả nước, Cách mạng Tháng Tám thành công vang dội.',
        sourceUrl: 'https://tienphong.vn/nhung-hinh-anh-lich-su-ve-cach-mang-thang-tam-1945-o-ha-noi-post1131749.tpo'
    },
    10: {
        source: 'Mặt trận Việt Minh tổ chức mít-tinh với sự tham gia của hàng vạn quần chúng nhân dân tại Quảng trường Nhà hát Lớn Hà Nội 17/8/1945.',
        sourceUrl: 'https://snv.quangngai.gov.vn/thong-tin-qua-cac-bao/cach-mang-thang-tam-nam-1945-su-kien-vi-dai-trong-lich-su-dan-toc-viet-nam.html'
    }
};

export const getBookmarkData = (id) => {
    const numericId = parseInt(id, 10);

    const defaultSource = {
        source: 'Nguồn không xác định',
        sourceUrl: null
    };

    if (numericId >= 1 && numericId <= 5) {
        const frontImages = [null, img2, img3, img4, img5, img6];

        return {
            id: numericId,
            front: frontImages[numericId],
            back: img1,
            ...bookmarkSources[numericId] ?? defaultSource
        };
    } else if (numericId >= 6 && numericId <= 10) {
        const offset = 6;
        const frontImages = [img8, img9, img10, img11, img12];

        return {
            id: numericId,
            front: frontImages[numericId - offset],
            back: img7,
            ...bookmarkSources[numericId] ?? defaultSource
        };
    }

    return {
        id: numericId,
        front: img2,
        back: img1,
        ...defaultSource
    };
};

export const getAllBookmarks = () => {
    return Array.from({ length: 10 }, (_, i) => getBookmarkData(i + 1));
};
