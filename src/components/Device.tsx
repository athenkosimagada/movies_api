interface DeviceProps {
  name: string,
  description: string,
  icon:any
}

function Device({name, description, icon}: DeviceProps) {
  return (
    <div className="device">
      <div className="device-title">
        <div className="device-icon">
          {icon}
        </div>

        <h3>{name}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Device;
