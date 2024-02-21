import { Oval } from  'react-loader-spinner'

export const myLoader = (props) => {
    <Oval
        height={80}
        width={80}
        color="#FFCB05"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#FDE073"
        strokeWidth={2}
        strokeWidthSecondary={2}
        {...props}
    />

}