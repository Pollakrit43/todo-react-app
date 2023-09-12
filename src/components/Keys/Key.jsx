import { BulletPoint, KeyContainer } from "./KeyStyle"


export const Key = () => {
  return (
    <KeyContainer role="list">
        <BulletPoint role="listitem">
            Not Completed
        </BulletPoint>
        <BulletPoint style={{color:'red'}} role="listitem">
            Completed
        </BulletPoint>
    </KeyContainer>
  )
}
