import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A2E', // Latar belakang gelap modern
    padding: 20,
    borderRadius: 20,
    margin: 10,
  },
  scoreCard: {
    backgroundColor: '#16213E', // Kartu gelap dengan aksen biru
    width: '100%',
    maxWidth: 350,
    padding: 20,
    borderRadius: 15,
    elevation: 12, // Bayangan lebih besar untuk efek modern
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    borderColor: '#0F3460',
    borderWidth: 2,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#E94560', // Warna merah futuristik untuk judul
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 28,
    color: '#0F3460', // Biru aksen untuk skor
    marginVertical: 8,
    fontFamily: 'Roboto-Mono', // Font modern
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 30,
  },
  iconButton: {
    borderRadius: 50,
    backgroundColor: '#53354A', // Warna ungu lembut untuk tombol
    padding: 20,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  resetButton: {
    marginTop: 40,
    width: '100%',
    maxWidth: 220,
    paddingVertical: 16,
    backgroundColor: '#22A39F', // Warna turquoise segar
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  resetButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase', // Transformasi teks untuk modernitas
    letterSpacing: 2,
  },
  winnerText: {
    fontSize: 30,
    color: '#E94560', // Merah mencolok untuk pemenang
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
  },
  scoreCardContainer: {
    flexDirection: 'row', // Tata letak horizontal
    justifyContent: 'space-between', // Jarak antar tim
    alignItems: 'center', // Rata tengah vertikal
    backgroundColor: '#16213E', // Latar belakang kartu
    padding: 20,
    borderRadius: 20,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    borderWidth: 2,
    borderColor: '#0F3460', // Aksen modern
  },
  teamContainer: {
    alignItems: 'center', // Elemen dalam tim diatur ke tengah
    width: '40%', // Lebar setiap tim
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700', // Warna emas untuk nama tim
    marginBottom: 10,
  },
  teamScore: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1E90FF', // Warna biru terang untuk skor
  },
  divider: {
    width: '20%', // Lebar pembagi
    justifyContent: 'center',
    alignItems: 'center',
  },
  vsText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF6347', // Warna merah-oranye untuk "VS"
    textAlign: 'center',
  },
});
