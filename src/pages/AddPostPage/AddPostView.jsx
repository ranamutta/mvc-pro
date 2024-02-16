

const AddPostView = ({handleSubmit,onInputChange}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Yeni Gönderi Ekle</h2>
      <fieldset>
        <label>Kullanıcı Adı:</label>
        <input type="text" placeholder="Kullanıcı adı giriniz.." onChange={(e) => onInputChange("user", e)} />
      </fieldset>
      <fieldset>
        <label>Başlık:</label>
        <input type="text" placeholder="Başlık giriniz.."  onChange={(e) => onInputChange("title", e)} />
      </fieldset>
      <fieldset>
        <label>Açıklama:</label>
        <textarea type="text" placeholder="Açıklama giriniz.." onChange={(e) => onInputChange("text", e)} />
      </fieldset>
      <button>Gönder</button>
    </form>
  )
}

export default AddPostView