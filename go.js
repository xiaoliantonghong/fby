class App extends React.Component {
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
        }}><font color="#ffffff">500福利导航-地址发布页</font>
        </div>


        <div style={{
          marginBottom: '3px',          border: '1px solid #d6d6d6',
          background: '#f7f7f7',
		  
        }}>
		<p class="c_blue c_link">最新地址➊：<a href="https://500dh1.shop" target="_blank"><font color="#0025ff">https://500dh1.shop</font></a><br /></p>
		<p class="c_blue c_link">最新地址➋：<a href="https://500dh2.shop" target="_blank"><font color="#0025ff">https://500dh2.shop</font></a><br /></p>
		<p class="c_blue c_link"><a href="https://t.me/dizhifabuye" target="_blank"><font color="#0025ff">点击加入电报交流群</font></a></p>
		
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
