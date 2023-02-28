import { DarkButton, OutlineButton } from "@/components/common/button"
import InputField from "@/components/common/input"
import { ChangeEvent } from "react"

function Index() {
  return (
    <div>
      <form>
        <InputField
          label={"Nombre"}
          onChange={() => {}}
          type={"text"}
          value={""}
          name={"text"}
          dataCy={"logintext"}
          required={false}
          placeholder={"Ingresa tu nombre"}
        />
        <DarkButton>Hola</DarkButton>
        <DarkButton disabled>Hola</DarkButton>
        <OutlineButton>Hola</OutlineButton>
        <OutlineButton disabled>Hola</OutlineButton>
      </form>
    </div>
  )
}

export default Index
