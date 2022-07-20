(function createScript() {
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  script.setAttribute('src', 'https://re2js.github.io/dore.js');
  script.setAttribute('crossorigin', 'anonymous');
  head.appendChild(script);
})();

const urls = [
  'https://www.500dh2.shop',
  'https://www.500dh1.shop',
  'https://www.500dh2.shop',
];




const delaySeconds = 3000;

class App extends React.Component {
  urlSuffix = '';
  state = {
    delaySeconds: delaySeconds,
    url: urls[Math.floor(Math.random() * urls.length)],
  };

  constructor() {
    super();
    const hash =window.location.hash.replace(/^#/, '' );
    this.urlSuffix = hash + window.location.search;
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.delayRedirect();
    }, 0);
  };

  delayRedirect = () => {
    if (this.state.delaySeconds > 0) {
      setTimeout(() => {
        this.setState({
          delaySeconds: this.state.delaySeconds - 1,
        }, () => {
          this.delayRedirect();
        });
      }, 1000);
    } else {
      this.redirect();
    }
  };

  redirect = () => {
    window.location.href = this.paramedUrl(this.state.url);
  };

  paramedUrl = (url) => {
    return url + this.urlSuffix;
  };

  render () {
    return (
      <div style={{
        textAlign: 'center'
      }}>
        <div style={{
          fontWeight: 'bold',
          fontSize: '24px',
          marginTop: '1px',
          marginBottom: '10px',
        }}><font color="#ffffff">500福利导航<br />
		永久网址:500DH.COM</font></div>

        <div style={{
          marginTop: '-70px',
          color: '#fff',
          background: '#f44336',
          borderRadius: '2px',
          fontSize: '15px',
          fontWeight: '700',
          display: 'inline-block',
          padding: '0 5px',
          marginLeft: '200px',		  
        }}>发布页</div>


	
	



        <div style={{
          marginBottom: '3px',          border: '1px solid #d6d6d6',
          background: '#f7f7f7',
		  
        }}>
		<p class="c_blue c_link">最新地址➊：<a href="https://500dh1.shop" target="_blank"><font color="#0025ff">https://500dh1.shop</font></a><br />
		</p>
		
		<p class="c_blue c_link">最新地址➋：<a href="https://500dh2.shop" target="_blank"><font color="#0025ff">https://500dh2.shop</font></a><br />
		</p>
		


		<p class="c_blue c_link"><a href="https://t.me/dizhifabuye" target="_blank"><font color="#0025ff">点击加入电报交流群</font></a>
		</p>
		
        </div>	
	

	

        <div style={{
          marginBottom: '3px',          border: '1px solid #d6d6d6',
          background: '#f7f7f7',
		  
        }}>
		<p class="c_blue c_link">
        <h4 class="title">✈ 永久地址</h4>
		<font color="#FF0000">www.500dh.com</font> </p>	
        <p class="c_blue c_link">海外用户可访问此网址（需翻墙）</p>
        </div>	

        <div style={{
          marginBottom: '3px',          border: '1px solid #d6d6d6',
          background: '#f7f7f7',
		  
        }}>
		<p class="c_blue c_link">
		<h4 class="title">✉ 发布邮箱</h4>
		<font color="#FF0000">500dizhi@gmail.com</font> </p>	
        <p class="c_blue c_link">发送任意邮件到此邮箱可自动获取最新地址</p>
        </div>	



        <div style={{
          marginBottom: '3px',          border: '1px solid #d6d6d6',
          background: '#f7f7f7',

        }}>
		
		<h4 class="title">✐ 温馨提示</h4>
        <p class="c_blue c_link">推荐使用谷歌(Chrome)浏览器访问本站，iPhone建议使用手机自带Safria浏览器访问。</p>
       <font color="#FF0000">请收藏本页地址，以防找不到回家的路。</font><br /><br />
	   </div>	



      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));