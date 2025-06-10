const ItemCard = () => {
  return (
    <div
      style={{
        minWidth: '100px',
        maxWidth: '300px',
        minHeight: '150px',
        width: '100%',
        height: '100%',
        backgroundColor: '#1f2937',
        borderRadius: '10px',
        // border: '0.1px solid #FEFEFE',
      }}
    >
      <div
        style={{
          backgroundColor: 'gray',
          width: '100%',
          maxHeight: '258px',
          height: '100%',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          maxHeight: '150px',
          height: '100%',
          padding: '24px',
          gap: '10px',
        }}
      >
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Item Title</div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>Item Price</div>
        </div>
        <button
          style={{
            backgroundColor: '#FF983F',
            color: 'white',
            padding: '10px',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
