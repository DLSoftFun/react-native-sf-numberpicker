/**
 * Created by Joker on 2018-04-27.
 */
import React,{Component} from 'react'
import {View, StyleSheet, TouchableOpacity, Text, TextInput} from 'react-native'
import PropTypes from 'prop-types'
/**
 * @param tag 标识
 * @param onNumberChanged 数字更改监听
 * @param style 样式
 * @param width 宽度
 * @param height 高度
 * @param canMinus 是否允许负数 默认true
 * @param maxNumber 最大数字*/
export default class SFNumberPicker extends Component{
    static propTypes = {
        tag:PropTypes.string,
        onNumberChanged:PropTypes.func,
        style:View.propTypes.style,
        width:PropTypes.number,
        height:PropTypes.number,
        canMinus:PropTypes.bool,
        maxNumber:PropTypes.number,
        fontSize:PropTypes.number
    }
    static defaultProps={
        tag:'numberPicker',
        width:90,
        height:30,
        canMinus:true,
        fontSize:12
    }
    constructor(props) {
        super(props)
        this.state={
            number:0
        }
    }

    render() {
        const props = this.props
        return (
            <View style={[{width:props.width,height:props.height},style.mainStyle,props.style]}>
                <TouchableOpacity style={{width:props.height,justifyContent:'center',alignItems:'center'}} onPress={this.minus}>
                    <Text style={[style.buttontextStyle,{fontSize:props.fontSize}]}>－</Text>
                </TouchableOpacity>
                <View style={[style.lineStyle,{height:props.height}]}/>
                <View style={[style.countainer,{height:props.height}]}>
                    <TextInput
                        style={[{flex:1,fontSize:12,color:'black',padding:0,textAlign:'center',textAlignVertical:'center'},{fontSize:props.fontSize}]}
                        onChangeText={this.numberChanged}
                        value={''+this.state.number}
                        underlineColorAndroid={'transparent'}
                        keyboardType={'numeric'}
                    />
                </View>
                <View style={[style.lineStyle,{height:props.height}]}/>
                <TouchableOpacity style={{width:props.height,justifyContent:'center',alignItems:'center'}} onPress={this.plus}>
                    <Text style={[style.buttontextStyle,{fontSize:props.fontSize}]}>＋</Text>
                </TouchableOpacity>
            </View>
        );
    }
    minus=()=>{
        if(this.props.canMinus){
            this.setState({
                number:this.state.number-1
            },this.callback)
        }else{
            this.setState({
                number:this.state.number>0?this.state.number-1:0
            },this.callback)
        }
    }
    plus=()=>{
        if(this.props.maxNumber==null){
            this.setState({
                number:this.state.number+1
            },this.callback)
        }else{
            this.setState({
                number:this.state.number<this.props.maxNumber?this.state.number+1:this.props.maxNumber
            },this.callback)
        }
    }
    numberChanged=(number)=>{
        if(!isNaN(number)){
            if(number>this.props.maxNumber){
                number = this.props.maxNumber
            }
        }else{
            number = 0
        }
        this.setState({number},this.callback)
    }
    callback=()=>{
        if(this.props.onNumberChanged!=null){
            this.props.onNumberChanged(this.props.tag,this.state.number)
        }
    }
}
const style = StyleSheet.create({
    countainer:{
        flex:1
    },
    mainStyle:{
        borderColor:'#e1e1e1',
        borderWidth:1,
        borderRadius:2,
        flexDirection:'row'
    },
    lineStyle:{
        width:1,
        backgroundColor:'#e1e1e1'
    },
    buttontextStyle:{
        color:'black',
        fontSize:12
    }
})