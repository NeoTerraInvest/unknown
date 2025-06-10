import { BaseLayout, ItemCard, MarginLayout, SNS } from '@components';

const Shopping = () => {
  return (
    <BaseLayout>
      <MarginLayout>
        {/* shopping concept */}
        <div
          className='rootMargin'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            marginTop: '200px',
          }}
        >
          <div
            className='titleMargin'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
              marginBottom: '100px',
            }}
          >
            <div
              className='descriptionMargin'
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontSize: '80px',
                  fontWeight: 'bold',
                  gap: '70px',
                  marginBottom: '60px',
                }}
              >
                <span style={{ color: '#FF983F' }}>How about finding</span>
                <span>your style in space?</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontSize: '20px',
                  gap: '20px',
                }}
              >
                <span>
                  Discover our cosmic collection of permium products. From
                  stellar fashion to
                </span>
                <span>
                  galactic accessories, find everything you need to express your
                  unique style among
                </span>
                <span>the stars. Quality that's out of this world!</span>
              </div>
            </div>
          </div>
          {/* product */}
          <div
            style={{
              fontSize: '40px',
              fontWeight: 'bold',
              marginTop: '80px',
              marginBottom: '80px',
            }}
          >
            Products
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              height: '408px',
            }}
          >
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
        {/* sns address */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            fontSize: '40px',
            fontWeight: 'bold',
            marginTop: '100px',
            marginBottom: '100px',
          }}
        >
          Contact Us
          <span style={{ fontSize: '20px', marginTop: '40px' }}>
            we watting for your product
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '40px',
            width: '100%',
            gap: '20px',
          }}
        >
          <input
            style={{
              //   backgroundColor: 'white',
              width: '50%',
              height: '40px',
              borderRadius: '10px',
              border: '1px solid #FEFEFE',
              padding: '20px',
            }}
            type='email'
            placeholder='Enter your email'
          />
          <button
            style={{
              backgroundColor: '#FF983F',
              color: 'white',
              padding: '10px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 'bold',
              width: '100px',
              height: '40px',
            }}
          >
            Send
          </button>
        </div>
        <div
          className='snsMargin'
          style={{
            display: 'flex',
            justifyContent: 'center',
            // marginTop: '100px',
            marginBottom: '100px',
          }}
        >
          <SNS />
        </div>
      </MarginLayout>
    </BaseLayout>
  );
};

export default Shopping;
