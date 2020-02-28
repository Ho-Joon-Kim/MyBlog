module.exports = (sequelize, DataTypes) => {
  return sequelize.define('posts', {
    post_id: {
      type: DataTypes.STRING(100),
    },
    
    date: {//체크ㅡㅡ으ㅡㅡㅡㅡ 필요오오오ㅗㅗㅗㅗㅗ
      type: DataTypes.DATE,
    },

    name: {
      type: DataTypes.STRING(100),
    },

    contents: {
      type: DataTypes.STRING(10000),
    },

    img: {
      type: DataTypes.STRING(10000),
    },

    tags: {
      type: DataTypes.STRING(500),
    },

    lookup: {
      type: DataTypes.STRING(25),
    },

    love: {
      type: DataTypes.INTEGER(10),
    },

    comment: {
      type: DataTypes.STRING(10000),
    },

    main_img: {
      type: DataTypes.STRING(10000),
    },

    introduce: {
      type: DataTypes.STRING(1000),
    }

  }, {
    timestamps: false,
  });
};