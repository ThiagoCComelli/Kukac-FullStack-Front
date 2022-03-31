class NotificationHelper {
  static notificationRef

  static setup(ref,divId) {
      ref.current = document.getElementById(divId)
      NotificationHelper.notificationRef = ref
  }
}

export default NotificationHelper