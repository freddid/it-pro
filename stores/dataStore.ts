export const useDataStore = defineStore('DataStore', {
   state: () => ({
      news: [],
      users: [],
      date: '',
      baseUrl: 'https://it-pro-back.onrender.com'
   }),

   actions: {
      async getNews() {
         try {
            this.news = await (await fetch(`${this.baseUrl}/api/getNews`)).json()
         } catch (error) {
            alert(error)
         }
      },
      async changeNews({ data, url }: { data: string; url: number }) {
         try {
            if (data[1]) {
               const formData = new FormData();
               formData.append('img', data[1])
               const res = await fetch(`${this.baseUrl}/api/upload`, {
                  method: 'POST',
                  body: formData,
               })
               data[0].img = (await res.json()).imgPath
            }

            data[0].token = sessionStorage.getItem('token')
            await fetch(`${this.baseUrl}/api/${url}`, {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(data[0]),
            });

            this.getNews()
         } catch (error) {
            alert(error)
         }
      },
      async getDate() {
         try {
            this.date = (await (await fetch(`${this.baseUrl}/api/getTime`)).json()).endDate
         } catch (error) {
            alert(error)
         }
      },
      async addDate(date: string) {
         try {
            const res = await fetch(`${this.baseUrl}/api/chooseTime`, {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({ date, token: sessionStorage.getItem('token') })
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
         try {
            this.users = await (await fetch(`${this.baseUrl}/api/getUsers`)).json()
         } catch (error) {
            alert(error)
         }
      },
      async addUser(data: object) {
         try {
            return await fetch(`${this.baseUrl}/api/addUser`, {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(data)
            });
         } catch (error) {
            alert(error)
         }
      },
      async authSystem(data: object) {
         try {
            const res = await fetch(`${this.baseUrl}/api/auth`, {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(data)
            });
            const token = await res.json()

            if (token.hash) {
               sessionStorage.setItem('token', token.hash)
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