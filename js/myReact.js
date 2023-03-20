class ImgBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="imgBox">
        <div className="bark"></div>
        <img src={this.props.imgSrc} />
      </div>
    );
  }
}

class Details extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="details" id={this.props.id}>
        <h1>{this.props.text}</h1>
        <p className="cardContent">{this.props.content}</p>
      </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <ImgBox imgSrc={this.props.imgSrc} />
        <Details id={this.props.id} text={this.props.text} />
      </div>
    );
  }
  componentDidMount() {
    let cardContent = document.getElementById(this.props.id);
    alert(cardContent);
    cardContent.innerHTML = this.props.text;
  }
}

window.addEventListener("load", () => {
  alert("haha");
  let root = ReactDOM.createRoot(document.body);
  root.render(
    <div>
      <div className="HanCard allCard">
        <Card
          id="HanCard"
          imgSrc="https://image.ibb.co/fYzTrb/lastofus.jpg"
          text={Han + content[0]}
        />
      </div>
      <div className="TingCard allCard">
        <Card
          id="TingCard"
          imgSrc="https://image.ibb.co/fYzTrb/lastofus.jpg"
          text={Ting + content[1]}
        />
      </div>
      <div className="JayCard allCard">
        <Card
          id="JayCard"
          imgSrc="https://image.ibb.co/fYzTrb/lastofus.jpg"
          text={Jay + content[2]}
        />
      </div>
      <div className="JingCard allCard">
        <Card
          id="JingCard"
          imgSrc="https://image.ibb.co/fYzTrb/lastofus.jpg"
          text={content[0]}
        />
      </div>
    </div>
  );
});

const Han = `<h4 class="color1">這張是子涵的</h4>`;
const Ting = `<h4 class="color1">這張是宛庭的</h4>`;
const Jay = `<h4 class="color1">這張是傑哥的</h4>`;

const content = [
  ` 
  <h4 class="color2 margin">這區是子涵的</h4>
  <p>思彤,</p>
  <p>生日快樂！</p>
  <p>You’re never around, you</p>
  <p>hate the music I’m into, you</p>
  <p>practically despise the movies I</p>
  <p>like, and yet somehow you still</p>
  <p>manage to be the best dad every year.</p>
  <p>How do you do that? :)</p>
  <p class="text-right">Happy Birthday, stone!</p>
  <p class="text-right">♥Sarah</p>"`,
  ` 
  <h4 class="color2 margin">這區是宛庭的</h4>
  <p>思彤,</p>
  <p>生日快樂！</p>
  <p>You’re never around, you</p>
  <p>hate the music I’m into, you</p>
  <p>practically despise the movies I</p>
  <p>like, and yet somehow you still</p>
  <p>manage to be the best dad every year.</p>
  <p>How do you do that? :)</p>
  <p class="text-right">Happy Birthday, stone!</p>
  <p class="text-right">♥Sarah</p>"`,
  ` 
  <h4 class="color2 margin">這區是傑哥的</h4>
  <p>思彤,</p>
  <p>生日快樂！</p>
  <p>You’re never around, you</p>
  <p>hate the music I’m into, you</p>
  <p>practically despise the movies I</p>
  <p>like, and yet somehow you still</p>
  <p>manage to be the best dad every year.</p>
  <p>How do you do that? :)</p>
  <p class="text-right">Happy Birthday, stone!</p>
  <p class="text-right">♥Sarah</p>"`,
];

/*<div class="card">
      <div class="imgBox">
        <div class="bark"></div>
        <img src="https://image.ibb.co/fYzTrb/lastofus.jpg" />
      </div>
      <div class="details">
        <h4 class="color1">You're not a Fossil! (YET)</h4>
        <h4 class="color2 margin">(HAPPY BIRTHDAY)</h4>
        <p>思彤,</p>
        <p>生日快樂！</p>
        <p>You’re never around, you</p>
        <p>hate the music I’m into, you</p>
        <p>practically despise the movies I</p>
        <p>like, and yet somehow you still</p>
        <p>manage to be the best dad every year.</p>
        <p>How do you do that? :)</p>
        <p class="text-right">Happy Birthday, stone!</p>
        <p class="text-right">♥Sarah</p>
      </div>
    </div>
    */
