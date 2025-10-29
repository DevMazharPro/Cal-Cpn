import CalCpn from "../components/CalCpn"


export const metadata = {
  title: 'Calculate Cpn',
  description: "An Easy Way To Calculate Cpn In Seconds"
};

const CalculateCpn = () => {
  return (
      <div className="w-full mt-20">
          <h1 className="text-5xl text-center font-bold">Cpn Calculator</h1> 
          <CalCpn /> 
    </div>
  )
}

export default CalculateCpn
