class UserList {
  constructor(selector) {
    this.element = document.querySelector(selector)
    this.http = new CustomHttp()
    this.handleResponse = this.handleResponse.bind(this)
  }
  setUsers(list) {
    list.forEach(user => {

      const pEl = document.createElement("p");
      pEl.classList.add('new')
      pEl.innerHTML = `<b><i>Name:</i></b> ${user.name}<br>`;
      this.element.appendChild(pEl);

      const newSpanEl = document.createElement("span");
      newSpanEl.classList.add('second')
      newSpanEl.classList.add('d-none')
      newSpanEl.innerHTML = `<b><i>Info:</i></b><br> 
        Email:${JSON.stringify(user.email)}<br>
        Phone:${JSON.stringify(user.phone)}<br>
        Website:${JSON.stringify(user.website)}`
      pEl.appendChild(newSpanEl)

      pEl.addEventListener('click', ({target})=>{
        const clickP = target.tagName === 'p'? target : target.closest('p'),
          childP = clickP.querySelector('span');
          if(childP){
            childP.classList.toggle('d-none')
          }
        const divId= document.querySelector('#users-list'),elementSpan = divId.querySelectorAll('span');
        elementSpan.forEach((item) => {
          if(item !== childP){
            item.classList.add('d-none')
        }
        })
      })

    })
  };
 
  handleResponse(list) {
    this.setUsers(list)
  }
  getUsers() {
    this.element.innerHTML = ''
    this.http.get('https://jsonplaceholder.typicode.com/users', this.handleResponse)
    }
}