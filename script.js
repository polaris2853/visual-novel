const scenario = [
	{
		speaker: "Khởi đầu",
		text: "Mọi chuyện bắt đầu từ những gương mặt lạ lẫm này, khi chúng ta bước vào một hành trình mới mang tên 'Cấp ba'.",
		bg: "assets/img/soft_bg.jpg", photo: "./assets/memories/IMG_6442.JPG"
	},
	{
		speaker: "Gặp gỡ",
		text: "Những ngày đầu còn giữ kẽ, chưa ai dám nói với ai câu nào, vậy mà tấm ảnh này đã ghi lại sự bắt đầu của chúng mình.",
		bg: "assets/img/soft_bg.jpg", photo: "./assets/memories/20251022_083420.jpg"
	},
	{
		speaker: "Chương mới",
		text: "Hóa ra, để trở nên thân thuộc, chúng ta chỉ cần cùng nhau đi qua những buổi sáng sớm rộn ràng tiếng nói cười.",
		bg: "assets/img/soft_bg.jpg", photo: "./assets/memories/IMG_2108.jpg"
	},
	{
		speaker: "Ký ức",
		text: "Góc sân trường hay lớp học, đi đâu cũng được, miễn là chúng mình đi cùng nhau.",
		bg: "assets/img/soft_bg.jpg", photo: "./assets/memories/IMG_0983.jpg"
	},

	{
		speaker: "Gắn bó",
		text: "Khi những ngại ngùng biến mất, chúng ta bắt đầu viết nên những câu chuyện mà chỉ người trong cuộc mới hiểu.",
		bg: "assets/img/pink_gradient.jpg", photo: "./assets/memories/IMG_9314.JPG"
	},
	{
		speaker: "Thanh xuân",
		text: "Khoảnh khắc chúng mình cùng nhau chúc mừng sinh nhật cô, người giáo viên chủ nhiệm thân thương.",
		bg: "assets/img/pink_gradient.jpg", photo: "./assets/memories/IMG_9151.jpg"
	},
	{
		speaker: "Kỷ niệm",
		text: "Dù là đi chơi xa hay chỉ là những phút giây tụ tập sau giờ học, mỗi khoảnh khắc đều đáng để nâng niu.",
		bg: "assets/img/pink_gradient.jpg", photo: "./assets/memories/z5050091833783_19b416b9ed05c2390ac959eb033e6427.jpg"
	},
	{
		speaker: "Chúng mình",
		text: "Nhìn vào tấm ảnh này, bạn có thấy sự rạng rỡ của chúng ta năm ấy không? Một thời không lo âu, không phiền muộn.",
		bg: "assets/img/pink_gradient.jpg", photo: "./assets/memories/IMG_1787.jpg"
	},

	{
		speaker: "Thời gian",
		text: "Dưới cái nắng hanh vàng của buổi khai giảng cuối cùng, tiếng trống trường vang lên không còn là hiệu lệnh bắt đầu một năm học mới, mà là nhịp đếm ngược cho những ngày tháng thanh xuân cuối cùng chúng ta còn được gọi nhau là bạn cùng lớp.",
		bg: "assets/img/sunset_pink.jpg", photo: "./assets/memories/khaigiang.jpg"
	},
	{
		speaker: "Kỷ yếu",
		text: "Người lo trang trí, người lo kịch bản... Chưa bao giờ thấy 50 thành viên 12A6 đồng lòng và quyết tâm đến thế.",
		bg: "assets/img/sunset_pink.jpg", photo: "./assets/memories/IMG_3467.jpg"
	},
	{
		speaker: "Lời chào",
		text: "Sau này có thể chúng ta sẽ ở những nơi khác nhau, nhưng mảnh ký ức này sẽ mãi nằm lại đây, trong tim mỗi người.",
		bg: "assets/img/sunset_pink.jpg", photo: "./assets/memories/IMG_KY.jpg"
	},
	{
		speaker: "Mãi mãi",
		text: "Cảm ơn vì đã là một phần của nhau trong những năm tháng đẹp nhất. Hẹn gặp lại vào một ngày nắng đẹp như hôm nay.",
		bg: "assets/img/sunset_pink.jpg", photo: "./assets/memories/IMG_3475.jpg"
	}
];

class VisualNovel {
	constructor(data) {
		this.data = data;
		this.index = 0;
		this.isTyping = false;
		this.init();
	}

	init() {
		this.render();
	}

	render() {
		const node = this.data[this.index];
		const photoEl = document.getElementById('memory-photo');

		document.getElementById('background').style.backgroundImage = `url(${node.bg})`;
		document.getElementById('speaker-name').textContent = node.speaker;

		// Hiệu ứng ảnh Polaroid
		photoEl.classList.remove('show');
		setTimeout(() => {
			if (node.photo) {
				photoEl.src = node.photo;
				photoEl.classList.add('show');
				document.querySelector('.polaroid-frame').style.transform = `rotate(${Math.random() * 6 - 3}deg) translateY(0)`;
			}
		}, 20);

		this.typeWriter(node.text);
		this.updateProgress();
	}

	typeWriter(text) {
		const textEl = document.getElementById('text-content');
		textEl.textContent = '';
		this.isTyping = true;
		let i = 0;
		const timer = setInterval(() => {
			textEl.textContent += text[i];
			i++;
			if (i >= text.length) {
				clearInterval(timer);
				this.isTyping = false;
			}
		}, 20);
	}

	updateProgress() {
		const prog = ((this.index + 1) / this.data.length) * 100;
		document.getElementById('progress-bar').style.width = prog + "%";
	}

	next() {
		if (this.isTyping) return;
		if (this.index < this.data.length - 1) {
			this.index++;
			this.render();
		}
	}
}

const game = new VisualNovel(scenario);