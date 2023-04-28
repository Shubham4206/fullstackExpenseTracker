const { DataTypes }=require('sequelize');
const sequelize=require('../connection/database.js');

const table=sequelize.define('expense',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    unique:true,
    primaryKey:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  price:{
    type:DataTypes.STRING,
    allowNull:false,
  },
//   email:{
//     type:DataTypes.STRING,
//     allowNull:false,
//   },

});
module.exports=table;