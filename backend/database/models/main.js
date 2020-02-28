module.exports = (sequelize, DataTypes) => {
  return sequelize.define('main', {
    visitor: {
      type: DataTypes.STRING(25),
    },

    notification: {
      type: DataTypes.STRING(20000),
    },

    all_tags: {
      type: DataTypes.STRING(1000),
    },

    popular: {
      type: DataTypes.STRING(20000),
    },

    new_post: {
      type: DataTypes.INTEGER(20),
    }
    
  }, {
    timestamps: false,
  });
};

