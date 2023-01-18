export const useDataStore = defineStore('DataStore', {
   state: () => ({
      news: [],
      users: [],
      date: '',
      newsModal: false,
      login: false,
   }),

   actions: {
      async getNews() {
         try {
            this.news = await (await fetch(`${baseUrl}/getNews`)).json()
         } catch (error) {
            alert(error)
         }
      },
      async changeNews({ data, url }: any) {
         try {
            if (data[1]) {
               const formData = new FormData();
               formData.append('img', data[1])
               console.log(data[1]);

               const res = await fetch(`${baseUrl}/upload`, {
                  method: 'POST',
                  body: formData,
               })
               data[0].img = (await res.json()).imgPath
            }

            data[0].token = localStorage.getItem('token')
            await fetch(`${baseUrl}/${url}`, {
               method: 'POST',
               mode: 'cors',
               cache: 'no-cache',
               credentials: 'same-origin',
               headers: { 'Content-Type': 'application/json' },
               redirect: 'follow',
               referrerPolicy: 'no-referrer',
               body: JSON.stringify(data[0]),
            });

            this.getNews()
         } catch (error) {
            alert(error)
         }
      },
      async getDate() {
         try {
            this.date = (await (await fetch(`${baseUrl}/getTime`)).json()).endDate
         } catch (error) {
            alert(error)
         }
      },
      async addDate(date: string) {
         try {
            const res = await fetch(`${baseUrl}/chooseTime`, {
               method: 'POST',
               mode: 'cors',
               cache: 'no-cache',
               credentials: 'same-origin',
               headers: { 'Content-Type': 'application/json' },
               redirect: 'follow',
               referrerPolicy: 'no-referrer',
               body: JSON.stringify({ date, token: localStorage.getItem('token') })
            });
            const { msg } = await res.json()

            if (msg == "Дата изменена") {
               alert(msg)
               this.date = date
            }
         } catch (error) {
            alert(error)
         }
      },
      async getUsers() {
         if (this.users.length) return
         try {
            this.users = await (await fetch(`${baseUrl}/getUsers`)).json()
         } catch (error) {
            alert(error)
         }
      },
      async addUser(data: object) {
         try {
            return await fetch(`${baseUrl}/addUser`, {
               method: 'POST',
               mode: 'cors',
               cache: 'no-cache',
               credentials: 'same-origin',
               headers: { 'Content-Type': 'application/json' },
               redirect: 'follow',
               referrerPolicy: 'no-referrer',
               body: JSON.stringify(data)
            });
         } catch (error) {
            alert(error)
         }
      },
      async authSystem(data: object) {
         try {
            const res = await fetch(`${baseUrl}/auth`, {
               method: 'POST',
               mode: 'cors',
               cache: 'no-cache',
               credentials: 'same-origin',
               headers: { 'Content-Type': 'application/json' },
               redirect: 'follow',
               referrerPolicy: 'no-referrer',
               body: JSON.stringify(data)
            });
            const token = await res.json()

            if (token.hash) {
               localStorage.setItem('token', token.hash)
               await navigateTo('/admin')
            } else {
               alert('Пароль или логин не правельный')
            }
         } catch (error) {
            alert(error)
         }
      }
   },

   getters: {
      getNewsObj: state => state.news
   }
});

if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot));
}

const baseUrl = 'https://it-pro-back.onrender.com/api'