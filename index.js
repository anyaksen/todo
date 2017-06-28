const config = {
    apiKey: "AIzaSyClAFr7Ux7bWPH9G_zeQjLodSiJaOmAkZc",
    authDomain: "test-c348e.firebaseapp.com",
    databaseURL: "https://test-c348e.firebaseio.com",
    projectId: "test-c348e",
    storageBucket: "test-c348e.appspot.com",
    messagingSenderId: "331789185027"
  };

  firebase.initializeApp( config);
  main3();

  async function main(){
      const testRef = firebase.database().ref('/test');
      const snapshot = await testRef.once('value');
      //console.log (snapshot, snapshot.key, snapshot.val());
      const value = snapshot.val();

      const output = document.getElementById('output');
      output.textContent = String(value);
      //testRef.set(value + 1);
      const result = await testRef.transaction (
          (value) => value+1
        );
        console.log(result);
        output.textContent = String (result.snapshot.val());
  }

  function main2 ()
  {
      const testRef = firebase.database().ref('/test');
      testRef.on (
          'value',
          (snapshot) => output.textContent = String (snapshot.val())
      );
      testRef.transact
  }

   function main3()   //делает узел и строками записывает временную метку
 {
	 const testRef = firebase.database().ref('/test');
	 const output = document.getElementById( 'output');
	 
	 /*testRef.push()
	 .set(
	 String( new Date())
	 );
	 */
	 
	 const newKey = testRef.push().key; //отдельно создается и записываетс, как пред-щий блок
	/* testRef.child( newKey)
	 .set(
	 String( new Date())
	 );*/
	 firebase.database().ref()  // запись в тест1 и тест2???
		.update(
		{
		[`/test/${newKey}`]:String(new Date()),
		[`/test2/${newKey}`]: true,
		});
	 
	  testRef.on(    // слушатель изменения
	 'value',
	 ( snapshot )=>
	 
	 {
		 console.log(snapshot.val() );  		 //выводит ключи и значения в консоль
		 const value = snapshot.val();
		 const keys = Object.keys( value);
		 
		 output.textContent = String( keys.length) ;
		 
		 for ( const key of keys) // массив по значениям = цикл for of
		 {
			 const item = document.createElement( 'div');
			 item.textContent = value[key];
			 
			 output.appendChild( item)    //вывод массива
		 }
	 
	 }
	 
	
	 );
 }