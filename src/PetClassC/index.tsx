import React from "react";

export class PetClassC extends React.Component {
  state = {
    name: 'nosorozec',
    age: 20,
  }

  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>){
    this.setState(prev => ({
      ...prev,
      name: e.target.value,
    }))
  }

  componentDidMount(): void {
    
  }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    
  }
  componentWillUnmount(): void {
    
  }

  render() {
    const {name, age} = this.state
    return (
      <div>
        
        <h2>{name}</h2>
        <span>Wiek: {age}</span>
        <input type="text" value={name} onChange={this.handleChange}/>
      </div>
    )
  }
}