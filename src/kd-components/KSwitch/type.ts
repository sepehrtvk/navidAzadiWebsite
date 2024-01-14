export default interface KSwitchProps {
  value: boolean
  onChange: (isActive: boolean) => void
  name?: string
  id?: string
}
