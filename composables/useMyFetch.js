export default async function (addr) {
   try {
      return await (await fetch(`http://185.211.170.2:5100/api${addr}`)).json()
   } catch (error) {
      alert(error)
   }
}