var baseUrl = "http://choxcreations.000webhostapp.com/AusbyWeb";
var modals1 = [
  `<h1 class="modal-header">Domestic General Cleaning <i>(Weekly/Fortnight)</i></h1>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="name" placeholder="Name">
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="email" placeholder="Email">
          <span class="focus-input100"></span>
      </div>
  </div>    
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input id="datepicker" class="input100" type="text" name="date" placeholder="Date" />
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="phone" placeholder="Phone Number">
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select city</option>
              <option>Brisbane</option>
          </select>
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select suburb</option>
              <option>suburb1</option>
          </select>
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <textarea class="input100" type="text" name="phone" placeholder="Message"></textarea>
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input101 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <button onclick="showMsg()" class="input101">Submit</button>
          <span class="hover-input101"></span>
      </div>
  </div>`,

  `<h1 class="modal-header">Domestic Bond Cleaning <i>(Weekly/Fortnight)</i></h1>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="name" placeholder="Name">
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="email" placeholder="Email">
          <span class="focus-input100"></span>
      </div>
  </div>    
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input id="datepicker" class="input100" type="text" name="date" placeholder="Date" />
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="phone" placeholder="Phone Number">
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select city</option>
              <option>Brisbane</option>
          </select>
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select suburb</option>
              <option>suburb1</option>
          </select>
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <textarea class="input100" type="text" name="phone" placeholder="Message"></textarea>
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input101 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <button onclick="showMsg()" class="input101">Submit</button>
          <span class="hover-input101"></span>
      </div>
  </div>`,

  `<h1 class="modal-header">Carpet Cleaning <i>(Domestic)</i></h1>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="name" placeholder="Name">
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="email" placeholder="Email">
          <span class="focus-input100"></span>
      </div>
  </div>    
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input id="datepicker" class="input100" type="text" name="date" placeholder="Date" />
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="phone" placeholder="Phone Number">
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select city</option>
              <option>Brisbane</option>
          </select>
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select suburb</option>
              <option>suburb1</option>
          </select>
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <input class="input100" type="text" name="phone" placeholder="Sqr">
            <span class="focus-input100"></span>
        </div>
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <textarea class="input100" type="text" name="phone" placeholder="Message"></textarea>
            <span class="focus-input100"></span>
        </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input101 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <button onclick="showMsg()" class="input101">Submit</button>
          <span class="hover-input101"></span>
      </div>
  </div>`,

  `<h1 class="modal-header">Office Cleaning</h1>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="name" placeholder="Name">
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="email" placeholder="Email">
          <span class="focus-input100"></span>
      </div>
  </div>    
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input id="datepicker" class="input100" type="text" name="date" placeholder="Date" />
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="phone" placeholder="Phone Number">
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select city</option>
              <option>Brisbane</option>
          </select>
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select suburb</option>
              <option>suburb1</option>
          </select>
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <input class="input100" type="text" name="phone" placeholder="Sqr">
            <span class="focus-input100"></span>
        </div>
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
        <select class="input100">
            <option value="" selected data-default hidden>Select number of floors</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>Others (please specify in message)</option>
        </select>
        </div>
  </div>
  <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <textarea class="input100" type="text" name="phone" placeholder="Message"></textarea>
            <span class="focus-input100"></span>
        </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input101 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <button onclick="showMsg()" class="input101">Submit</button>
          <span class="hover-input101"></span>
      </div>
  </div>`,

  `<h1 class="modal-header">Periodical Cleaning</i></h1>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="name" placeholder="Name">
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="email" placeholder="Email">
          <span class="focus-input100"></span>
      </div>
  </div>    
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input id="datepicker" class="input100" type="text" name="date" placeholder="Date" />
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="phone" placeholder="Phone Number">
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select city</option>
              <option>Brisbane</option>
          </select>
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select suburb</option>
              <option>suburb1</option>
          </select>
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <textarea class="input100" type="text" name="phone" placeholder="Message"></textarea>
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input101 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <button onclick="showMsg()" class="input101">Submit</button>
          <span class="hover-input101"></span>
      </div>
  </div>`,

  `<h1 class="modal-header">Loan Moving</h1>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="name" placeholder="Name">
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="email" placeholder="Email">
          <span class="focus-input100"></span>
      </div>
  </div>    
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input id="datepicker" class="input100" type="text" name="date" placeholder="Date" />
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <input class="input100" type="text" name="phone" placeholder="Phone Number">
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select city</option>
              <option>Brisbane</option>
          </select>
          <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <select class="input100">
              <option value="" selected data-default hidden>Select suburb</option>
              <option>suburb1</option>
          </select>
          <span class="focus-input100"></span>
      </div>
  </div>
  <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <input class="input100" type="text" name="phone" placeholder="Land/Yard Sqr">
            <span class="focus-input100"></span>
        </div>
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <textarea class="input100" type="text" name="phone" placeholder="Message"></textarea>
            <span class="focus-input100"></span>
        </div>
  </div>
  <p style="text-align: center;color: white;">Further contact us for any clarification</p>
  <div class="flex-display">
      <div class="wrap-input101 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
          <button onclick="showMsg()" class="input101">Submit</button>
          <span class="hover-input101"></span>
      </div>
  </div>`,
  `<h1 class="modal-header">Other Cleaning</h1>
  <p> Content </p>`
];

var modals2 = [
    `<h1 class="modal-header">Domestic General Cleaning <i>(Occational Catchup)</i></h1>
    <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <input class="input100" type="text" name="name" placeholder="Name">
            <span class="focus-input100"></span>
        </div>
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <input class="input100" type="text" name="email" placeholder="Email">
            <span class="focus-input100"></span>
        </div>
    </div>    
    <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <input id="datepicker" class="input100" type="text" name="date" placeholder="Date" />
            <span class="focus-input100"></span>
        </div>
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <input class="input100" type="text" name="phone" placeholder="Phone Number">
            <span class="focus-input100"></span>
        </div>
    </div>
    <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <select class="input100">
                <option value="" selected data-default hidden>Select city</option>
                <option>Brisbane</option>
            </select>
            <span class="focus-input100"></span>
        </div>
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <select class="input100">
                <option value="" selected data-default hidden>Select suburb</option>
                <option>suburb1</option>
            </select>
            <span class="focus-input100"></span>
        </div>
    </div>
    <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <textarea class="input100" type="text" name="phone" placeholder="Message"></textarea>
            <span class="focus-input100"></span>
        </div>
    </div>
    <div class="flex-display">
        <div class="wrap-input101 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <button onclick="showMsg()" class="input101">Submit</button>
            <span class="hover-input101"></span>
        </div>
    </div>`,
  
    `<h1 class="modal-header">Domestic Bond Cleaning <i>(Occational Catchup)</i></h1>
    <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <input class="input100" type="text" name="name" placeholder="Name">
            <span class="focus-input100"></span>
        </div>
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <input class="input100" type="text" name="email" placeholder="Email">
            <span class="focus-input100"></span>
        </div>
    </div>    
    <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <input id="datepicker" class="input100" type="text" name="date" placeholder="Date" />
            <span class="focus-input100"></span>
        </div>
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <input class="input100" type="text" name="phone" placeholder="Phone Number">
            <span class="focus-input100"></span>
        </div>
    </div>
    <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <select class="input100">
                <option value="" selected data-default hidden>Select city</option>
                <option>Brisbane</option>
            </select>
            <span class="focus-input100"></span>
        </div>
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <select class="input100">
                <option value="" selected data-default hidden>Select suburb</option>
                <option>suburb1</option>
            </select>
            <span class="focus-input100"></span>
        </div>
    </div>
    <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <textarea class="input100" type="text" name="phone" placeholder="Message"></textarea>
            <span class="focus-input100"></span>
        </div>
    </div>
    <div class="flex-display">
        <div class="wrap-input101 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <button onclick="showMsg()" class="input101">Submit</button>
            <span class="hover-input101"></span>
        </div>
    </div>`,

    `<h1 class="modal-header">Carpet Cleaning <i>(Commercial)</i></h1>
    <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <input class="input100" type="text" name="name" placeholder="Name">
            <span class="focus-input100"></span>
        </div>
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <input class="input100" type="text" name="email" placeholder="Email">
            <span class="focus-input100"></span>
        </div>
    </div>    
    <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <input id="datepicker" class="input100" type="text" name="date" placeholder="Date" />
            <span class="focus-input100"></span>
        </div>
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <input class="input100" type="text" name="phone" placeholder="Phone Number">
            <span class="focus-input100"></span>
        </div>
    </div>
    <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <select class="input100">
                <option value="" selected data-default hidden>Select city</option>
                <option>Brisbane</option>
            </select>
            <span class="focus-input100"></span>
        </div>
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <select class="input100">
                <option value="" selected data-default hidden>Select suburb</option>
                <option>suburb1</option>
            </select>
            <span class="focus-input100"></span>
        </div>
    </div>
    <div class="flex-display">
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <select class="input100">
                <option value="" selected data-default hidden>Select the feature</option>
                <option>Studio</option>
                <option>1 bed house or unit</option>
                <option>2 bed house or unit</option>
                <option>3 bed house or unit</option>
                <option>4 bed house or unit</option>
                <option>5 bed house or unit</option>
                <option>6 bed house or unit</option>
                <option>Other (Please specify in message box)</option>
            </select>
            <span class="focus-input100"></span>
        </div>
        <div class="wrap-input100 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <textarea class="input100" type="text" name="phone" placeholder="Message"></textarea>
            <span class="focus-input100"></span>
        </div>
    </div>
    <div class="flex-display">
        <div class="wrap-input101 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
            <button onclick="showMsg()" class="input101">Submit</button>
            <span class="hover-input101"></span>
        </div>
    </div>`,
    ``,
    ``,
    ``,
    ``
  ];

var left_option_arr = ["Weekly/Fortnight", "Weekly/Fortnight", "Domestic","","","",""];
var right_option_arr = ["Occational Catchup", "Occational Catchup", "Commercial","","","",""];

jQuery(document).ready(function($) {

	'use strict';

      var owl = $("#owl-testimonials");

        owl.owlCarousel({
          
          pagination : true,
          paginationNumbers: false,
          autoPlay: 6000, //Set AutoPlay to 3 seconds
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
          
      });


        var top_header = $('.parallax-content');
        top_header.css({'background-position':'center center'}); // better use CSS

        $(window).scroll(function () {
        var st = $(this).scrollTop();
        top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
        });


        $('.counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {

            duration: 8000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });  
          
        });


        $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
        })



        $(".pop-button").click(function () {
            $(".pop").fadeIn(300);
            
        });

        $(".pop > span").click(function () {
            $(".pop").fadeOut(300);
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });


	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });

        $('.scroll-link').on('click', function(event){
            event.preventDefault();
            var sectionID = $(this).attr("data-id");
            scrollToID('#' + sectionID, 750);
        });
        // scroll to top action
        $('.scroll-top').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop:0}, 'slow');         
        });
        // mobile nav toggle
        $('#nav-toggle').on('click', function (event) {
            event.preventDefault();
            $('#main-nav').toggleClass("open");
        });

        function scrollToID(id, speed){
          var offSet = 50;
          var targetOffset = $(id).offset().top - offSet;
          var mainNav = $('#main-nav');
          $('html,body').animate({scrollTop:targetOffset}, speed);
          if (mainNav.hasClass("open")) {
              mainNav.css("height", "1px").removeClass("in").addClass("collapse");
              mainNav.removeClass("open");
          }
      }
      if (typeof console === "undefined") {
          console = {
              log: function() { }
          };
      }

      var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        slidesPerView: 'auto',
        spaceBetween: 30,
  
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })

      $("#options").hide();

      $("input:file").change(function (){
        var fileName = $(this).val();
        $(".custom-file-upload").html(fileName);
      });

      $(':radio').change(async function() {
          var rating = this.value;
          const { value: formValues } = await Swal.fire({
            confirmButtonText: 'Submit',
            title: 'Submit your review',
            html:
            `<div class="flex-display-alt">
            <div class="wrap-input102 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
                <input id="rev_email" class="input102" type="text" name="phone" placeholder="Email">
                <span class="focus-input102"></span>
            </div>
            </div>
            <div class="flex-display-alt">
            <div class="wrap-input102 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
                <input id="rev_name" class="input102" type="text" name="phone" placeholder="Name">
                <span class="focus-input102"></span>
            </div>
            </div>
            <div class="flex-display-alt">
            <div class="wrap-input102 validate-input m-b-16 flex-item" style="width: 50%;" data-validate="Please enter email: ex@abc.xyz">
                <input id="rev_comment" class="input102" type="text" name="phone" placeholder="Review">
                <span class="focus-input102"></span>
            </div>
            </div>`,
            focusConfirm: false,
            preConfirm: () => {
              return [
                rating,
                document.getElementById('rev_email').value,
                document.getElementById('rev_name').value,
                document.getElementById('rev_comment').value
              ]
            }
          })
          
          if (formValues) {
            if(formValues[0] !== "" && formValues[1] !== "" && formValues[2] !== ""){
                var jqxhr = $.post( baseUrl+"/api/addrating.php", {rating: formValues[0], email: formValues[1], name: formValues[2], review: formValues[3]})
                .done(function(res) {
                    console.log(res);
                    alert( "second success" );
                    return;
                })
                .fail(function(err) {
                    console.log(err);
                    alert( "error" );
                    return;
                });
            }
          }
      });

      $("#quote_type").change(function (){
        alert($(this).val());
        $("#quote_form").empty();
      });      

});

var last_section = 0;
function expandOptions(section){
  if( section === last_section && $('#options').is(':visible') ) {
    $("#options").hide(200);
  } else if(section !== last_section) {
    $("#options").hide(200);
    $("#modal-div1").empty();
    $("#modal-div1").append(modals1[section]);
    if(left_option_arr[section] !== ""){
        $('#demo01').html(left_option_arr[section]);
        $('#demo02').html(right_option_arr[section]);
        $("#modal-div1").empty();
        $("#modal-div1").append(modals1[section]);
        $("#modal-div2").empty();
        $("#modal-div2").append(modals2[section]);
        $("#options").show(200);
    }
  } else {
    $("#modal-div1").empty();
    $("#modal-div1").append(modals1[section]);
    if(left_option_arr[section] !== ""){
        $('#demo01').html(left_option_arr[section]);
        $('#demo02').html(right_option_arr[section]);
        $("#modal-div1").empty();
        $("#modal-div1").append(modals1[section]);
        $("#modal-div2").empty();
        $("#modal-div2").append(modals2[section]);
        $("#options").show(200);
    }
  }
  last_section = section;
}

function showMsg(){
  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  );
}

function registerToggle(){
    $('#toggle_title').html('Register With Us');
    $('#toggle_para').html('Register With Us Description');
    $('.toggle-register')[0].click();
}

function workToggle(){
    $('#toggle_title').html('Work With Us');
    $('#toggle_para').html('Work With Us Description');
    $('.toggle-work')[0].click();
}
