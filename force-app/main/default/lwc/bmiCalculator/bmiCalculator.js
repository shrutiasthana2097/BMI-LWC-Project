import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {

    height = ''
    weight=''
    bmiresult=''
    result=''
    isUnhealthy=true

    inputHandler(event)
    {
        const {name,value} = event.target


        if(name==="height")
        {
            this.height=value
        }

        if(name==="weight")
        {
            this.weight=value;
        }

        
    }

    submitHandler(event)
    {
        event.preventDefault();
        console.log('height is ', this.height)
        console.log('weight is ', this.weight)

        if(this.height!='' && this.weight !='')
        {
            let heightnum = Number(this.height)/100;
        this.bmiresult = Number(this.weight)/(heightnum * heightnum)

        this.bmiresult=this.bmiresult.toFixed(2)
        console.log('bmi is - ', this.bmiresult)

        if(Number(this.bmiresult) <= 18.5)
            this.result = "Underweight"
        else if(Number(this.bmiresult) > 18.5 && Number(this.bmiresult) <=24.9)
        {
            this.result ="Healthy"
            this.isUnhealthy=false
        }
        else if(Number(this.bmiresult) > 25 && Number(this.bmiresult) <=29.9)
            this.result ="Overweight"
        else
            this.result = "Obese"

        console.log("The result is ", this.result )


        }
        
        
    }

    recalculateHandler(){

        this.height = ''
        this.weight=''
        this.bmiresult=''
        this.result=''
        
    }

}