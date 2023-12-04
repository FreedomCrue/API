const func = async () => {
    const encodedLogin = encodeURIComponent("aW5kcmEua2RwYWVnaXNAbWFpbC5ydQ==");
    const encodedPassword = encodeURIComponent("cXdpbDYwOV9sYU4=");
    const url = `https://дмип.рф/api2.php?login=${encodedLogin}&password=${encodedPassword}&app=112233&type=auth`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      console.log(data);
  
      document.body.innerHTML = `<h1>${data.title}</h1><p></p>`;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  func();
